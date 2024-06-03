// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Populate Projects Section dynamically
    fetchProjects();
    // Update current date and time in the footer
    updateDateTime();
    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        // Perform form validation and submission
        // Display success or error message
        alert("Fake Form submitted successfully!");
    });
});
// Function to fetch projects dynamically
function fetchProjects(){
    // Your code to fetch projects from the provided link
}
// Function to update current date and time in the footer
function updateDateTime(){
    const now = new Date
    const dateTimeString = now.toLocaleString();
    document.getElementById("currentDateTime").textContent = dateTimeString;
}