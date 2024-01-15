document.querySelector(".explore-button").addEventListener("click", function() {
    const dialog = document.querySelector("#about-content-dialog");
    dialog.style.display = "block"; // Make the dialog box visible
  
    // Close the dialog box when the user clicks outside of it
    window.addEventListener("click", function(event) {
      if (event.target === dialog) {
        dialog.style.display = "none";
      }
    });
  });
  