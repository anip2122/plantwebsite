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
    $(document).ready(function(){
        $('.carousel').slick({
            infinite: true, // Enable infinite looping
            slidesToShow: 1, // Show only one slide at a time
            slidesToScroll: 1, // Scroll only one slide at a time
            dots: true, // Show dot indicators at the bottom
            arrows: true, // Enable prev/next arrows
            autoplay: true, // Enable autoplay mode
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            adaptiveHeight: true, // Adjust slide height based on content
            swipe: true // Enable swipe functionality
        });
    });

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
