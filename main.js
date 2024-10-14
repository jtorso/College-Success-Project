// main.js
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class when the element is in view
      } else {
        entry.target.classList.remove('visible'); // Remove visible class when the element is out of view
      }
    });
  }, options);

  // Select all sections that should fade in
  const fadeElements = document.querySelectorAll('.context-matters, .your-community, .learning-hard, .change-ubitqutous, .wellness-challenging, .slow-down, .conflict-inevitable, .success-surprise');

  fadeElements.forEach(element => {
    observer.observe(element); // Start observing each element
    element.classList.add('fade-in'); // Add fade-in class to each element
  });
});
