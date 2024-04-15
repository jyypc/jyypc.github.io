function toggleAccordion(clickedElement) {
// Check if the clicked element is not the accordion-content
if (!clickedElement.classList.contains('accordion-content')) {
    var accordionContent = clickedElement.querySelector('.accordion-content');
    accordionContent.classList.toggle("active");
    // accordionContent.style.display = (accordionContent.style.display === 'none' || accordionContent.style.display === '') ? 'block' : 'none';
}
}