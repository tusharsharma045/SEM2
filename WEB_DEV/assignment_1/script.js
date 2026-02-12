document.addEventListener("DOMContentLoaded", () => {

  const eventForm = document.getElementById("eventForm");
  const eventTitle = document.getElementById("eventTitle");
  const eventDate = document.getElementById("eventDate");
  const eventCategory = document.getElementById("eventCategory");
  const eventDescription = document.getElementById("eventDescription");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const addSampleBtn = document.getElementById("addSampleBtn");
  const eventContainer = document.getElementById("eventContainer");

  let sampleEvent = [
    {
      title: "Web dev",
      date: "4-6-2026",
      category: "workshop",
      description: "ahgs h adg ihai dgjabds"
    },
    {
      title: "Web dev2",
      date: "4-7-2026",
      category: "conference",
      description: "ahgs dsfchjh adg ihai dgjabds"
    }
  ];

  function showEmptyState() {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty-state");
    emptyDiv.textContent = "No events added yet!";
    eventContainer.appendChild(emptyDiv);
  }

  function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <button class="delete-btn">X</button>
      <h3>${eventData.title}</h3>
      <div>${eventData.date}</div>
      <span>${eventData.category}</span>
      <p>${eventData.description}</p>
    `;

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      card.remove();

      if (eventContainer.children.length === 0) {
        showEmptyState();
      }
    });

    return card;
  }

  function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
  }

  eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
      title: eventTitle.value,
      date: eventDate.value,
      category: eventCategory.value,
      description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
  });

  clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "";
    showEmptyState();
  });

  addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => addEvent(event));
  });

  showEmptyState();

});


eventContainer.addEventListener("click", (event) => {

const card = event.target.clossest("event-card");

if (event.target.classList.contains("delete-btn")) {
  card.remove();
  if (eventContainer.children.length === 0) {
    eventContainer.innerHTML = "<div class='empty-state'>No events added yet!</div>";
  }
}
});


clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = "<div class='empty-state'>No events added yet!</div>";
});