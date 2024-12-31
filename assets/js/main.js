/* main.js */

(function ($) {
    "use strict";

    const imJs = {
        m() {
            this.methods();
        },
        methods() {
            this.smoothScroll();
            this.backToTop();
            this.stickyHeader();
            this.contactForm();
            AOS.init({
                duration: 1000,
                offset: 100,
                easing: 'ease-in-out',
                once: true
            });
        },

        /* Smooth Scroll */
        smoothScroll() {
            $(".navbar-nav a, .smooth-scroll").on("click", function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    const hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                }
            });
        },

        /* Back to Top */
        backToTop() {
            const backToTopButton = $('#back-to-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    backToTopButton.fadeIn();
                } else {
                    backToTopButton.fadeOut();
                }
            });

            backToTopButton.on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        },

        /* Sticky Header */
        stickyHeader() {
            $(window).on('scroll', function () {
                const sticky = $('.header .navbar');
                if ($(window).scrollTop() > 50) {
                    sticky.addClass('sticky');
                } else {
                    sticky.removeClass('sticky');
                }
            });
        },

        /* Contact Form */
        contactForm() {
            const form = $('.contact-form');
            form.on('submit', function (e) {
                e.preventDefault();
                const formData = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: 'contact.php', // Replace with your contact form handling script
                    data: formData,
                    success(response) {
                        alert('Message Sent Successfully!');
                        form[0].reset();
                    },
                    error() {
                        alert('An error occurred. Please try again later.');
                    }
                });
            });
        }
    };

    $(document).ready(function () {
        imJs.m();
    });

})(jQuery);
