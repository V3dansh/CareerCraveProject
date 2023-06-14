// Get reference to the Save button
const saveBtn = document.querySelector('.save-btn');

// Set a flag to track changes
let changesMade = false;

// Add event listeners to inputs or sections that can be changed
const inputs = document.querySelectorAll('input');
const sections = document.querySelectorAll('.section');

inputs.forEach((input) => {
  input.addEventListener('input', handleInputChange);
});

sections.forEach((section) => {
  section.addEventListener('input', handleInputChange);
});

// Function to handle input changes
function handleInputChange() {
  // Set the changesMade flag to true
  changesMade = true;

  // Enable the Save button
  saveBtn.disabled = false;
}

// Add an event listener to track when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Enable the Save button if changes have been made
  if (changesMade) {
    saveBtn.disabled = false;
  }
});

