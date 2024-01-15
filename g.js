const dialogButton = document.getElementById("dialog-button");
const dialogBox = document.getElementById("dialog-box");
const closeButton = document.getElementById("close-button");

dialogButton.addEventListener("click", () => {
  dialogBox.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  dialogBox.classList.add("hidden");
});

// Add JavaScript for hamburger menu functionality
// (assuming you have a checkbox with the class "hamburger-toggle")
const hamburgerToggle = document.querySelector('.hamburger-toggle');
hamburgerToggle.addEventListener('change', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
});

// Smooth scrolling to the "About Story" section
const aboutStory = document.getElementById("about-story");
aboutStory.scrollIntoView({ behavior: "smooth" });
