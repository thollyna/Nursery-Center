let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the chatbox
function showMessage() {
  const chatbox = document.getElementById('chatbox');
  chatbox.style.display = 'block'; // Show the chatbox
}

// Function to close the chatbox
function closeChat() {
  const chatbox = document.getElementById('chatbox');
  chatbox.style.display = 'none'; // Hide the chatbox
}

// JavaScript to handle the dropdown toggle on click
document.addEventListener("DOMContentLoaded", function () {
    // Select the dropdown toggle link and dropdown content
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown');

    // Add a click event listener to toggle the dropdown
    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('active');
    });

    // Optionally, close the dropdown if the user clicks outside
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});