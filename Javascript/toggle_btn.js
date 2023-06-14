document.addEventListener('DOMContentLoaded', () => {
    // Get all the section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
  
    // Attach click event listener to each section header
    sectionHeaders.forEach((header) => {
      // Get the toggle button and h5 element within the section header
      const toggleButton = header.querySelector('.fa-toggle-off');
      const h5Element = header.querySelector('h5');
  
      // Attach click event listener to the toggle button
      toggleButton.addEventListener('click', () => {
        // Toggle the active state of the toggle button
        toggleButton.classList.toggle('fa-toggle-on');
        toggleButton.classList.toggle('fa-toggle-off');
  
        // Toggle the background color of the h5 element
      if (toggleButton.classList.contains('fa-toggle-on')) {
        h5Element.style.backgroundColor = 'darkgrey';
        toggleButton.style.color = 'plum';
      } else {
        h5Element.style.backgroundColor = '';
        toggleButton.style.color = '#8B8B8B';
          }
          
      });
    });
  });
  