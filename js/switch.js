const aboutBut = document.getElementById("about");
const projectsBut = document.getElementById("projects");
const friendsBut = document.getElementById("friends");

// document.getElementById("about").addEventListener('click', aboutPage);
// document.getElementById("projects").addEventListener('click', enter());
document.getElementById("friends").addEventListener('click', friendsPage);

function friendsPage() {
    console.log("now");
    window.location.href = "friends.html";
}