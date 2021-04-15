$(document).ready(function () {

    var toggleMenu = $('.toggle-menu');
    var navList = $('.navbar-list');
    var navLinks = $('.navbar-link');
    var nav = $('.navbar');

    toggleMenu.click(function () {
        navList.toggleClass('active');
        toggleMenu.toggleClass('active');
        if (navList.hasClass('active')) {
            gsap.fromTo(navLinks, {
                delay: 0.2,
                x: 100,
                scale: 0,
            }, {
                x: 0,
                scale: 1,
                stagger: 0.2
            })
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });


    // Navbar Animations
    gsap.from('.navbar-brand', {
        duration: 1,
        x: -200,
        scale: 0,
    })
    gsap.from('.navbar-list > li', {
        scale: 0,
        opacity: 0,
        delay: 0.4,
        stagger: 0.2,
    })
    gsap.from('.navbar-btn', {
        scale: 0,
    })
})
