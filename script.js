document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.accordion details');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
                this.querySelector('p.answer').classList.remove('visible');
            } else {
                faqItems.forEach(item => {
                    item.removeAttribute('open');
                    item.querySelector('p.answer').classList.remove('visible');
                });
                this.setAttribute('open', '');
                this.querySelector('p.answer').classList.add('visible');
            }
        });
    });

    // Carousel initialization
    const carouselItems = document.querySelectorAll('.carousel-item');
    // Your carousel initialization code here

    // Function to scroll to the top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Show "Back to Top" button when user scrolls down
    window.addEventListener("scroll", function() {
        var backToTopButton = document.getElementById("back-to-top");
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Add click event listener to back-to-top button
    document.getElementById("back-to-top").addEventListener("click", function() {
        scrollToTop();
    });
});
