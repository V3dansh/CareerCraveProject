// Get all the section headers
const sectionHeaders = document.querySelectorAll('.section-header');

// Attach click event listener to each section header
sectionHeaders.forEach((header) => {
  // Get the h5 element within the section header
  const h5Element = header.querySelector('h5');

  // Attach click event listener to the pencil icon
  header.querySelector('.fa-pencil').addEventListener('click', () => {
    // Toggle the contenteditable attribute value of the h5 element
    h5Element.contentEditable = !h5Element.isContentEditable;

    // Set focus to the h5 element for immediate editing
    if (h5Element.isContentEditable) {
      h5Element.focus();
    }
  });

  // Attach click event listener to the document
  document.addEventListener('click', (event) => {
    // Check if the click is outside the section header and h5 element
    if (!header.contains(event.target) && event.target !== h5Element) {
      // Disable editing and save the edited text
      h5Element.contentEditable = false;
      saveEditedText(h5Element.textContent);
    }
  });
});

// Function to save the edited text
function saveEditedText(text) {
  // Perform your saving logic here
  console.log('Edited text:', text);
}