// Auto-scroll carousels
function autoScrollCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel, index) => {
        let scrollAmount = 0;
        const cardWidth = 340; // card width + gap
        
        setInterval(() => {
            scrollAmount += cardWidth;
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            }
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 3000 + (index * 1000)); // Stagger the timing for each carousel
    });
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    autoScrollCarousels();
});
