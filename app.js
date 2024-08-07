$(document).ready(function() {
    var step = 100; // Adjust scroll step as needed
    var stepFilter = 60; // Adjust scroll step for filters if needed

    // Scrolling for Recommendations section
    $(".back").on("click", function(e) {
        e.preventDefault();
        $(".highlight-wrapper").animate({
            scrollLeft: "-=" + step + "px"
        }, 500); // Optional: add duration for smooth scrolling
    });

    $(".next").on("click", function(e) {
        e.preventDefault();
        $(".highlight-wrapper").animate({
            scrollLeft: "+=" + step + "px"
        }, 500); // Optional: add duration for smooth scrolling
    });
});

// Example JavaScript functionality

// Toggle menu button (if applicable)
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    // Implement menu toggle functionality here
    alert('Menu toggled!');
});

// Example for handling card hover effects (if needed)
const detailCards = document.querySelectorAll('.detail-card');
detailCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = 'rgba(140, 120, 180, 0.5) 0px 4px 12px 0px';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'rgba(140, 120, 180, 0.5) 0px 2px 8px 0px';
    });
});
