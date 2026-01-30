
    const userProfile =  Name: "Tushar Sharma",
        Role: "Developer";

    const profileSection = document.getElementById("profile");

    profileSection.innerHTML = `
        <h1>User Profile</h1>
        <div class="profile-card">
            <p><strong>Name:</strong> ${userProfile.name}</p>
            <p><strong>Role:</strong> ${userProfile.role}</p>
        </div>

    `;


    
     4. Simple styling
    profile.style.width = "300px";
    profile.style.padding = "15px";
    profile.style.border = "1px solid #ccc";
    profile.style.margin = "40px auto";
    profile.style.fontFamily = "Arial";

    heading.style.textAlign = "center";

    name.style.fontSize = "14px";
    role.style.fontSize = "14px";

