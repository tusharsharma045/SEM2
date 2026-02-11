function handleClick() {
    document.getElementById("myButton").textContent = "Clicked!";
}

function handleSecondClick() {
    document.getElementById("myHeading").style.color = "blue";
}

function handleThirdClick() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<h2>New Heading</h2><img src='image.jpg' alt='Image'>";
}


