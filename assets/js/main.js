$(document).ready(function () {
    var toggleMenu = $('.toggle-menu');
    var navList = $('.navbar-list');
    var navLinks = $('.navbar-link');

    toggleMenu.click(function () {
        navList.toggleClass('active');
        toggleMenu.toggleClass('active');
        gsap.fromTo(navLinks, {
            delay:0.2,
            x:100,
            scale:0,
        }, {
            x:0,
            scale:1,
            stagger:0.2
        })
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

    // Hero After Background Animations
    gsap.from('.after-bg-path-1', {
        delay: 0.4,
        opacity: 0,
        scale:0,
    }, "=.2")
    gsap.from('.after-bg-path-2', {
        delay: 0.6,
        scale: 0.2,
        opacity: 0,
        transformOrigin: "center"
    }, "=.2")
    gsap.from('.after-bg-path-3', {
        delay: 0.8,
        scaleY: 0,
        opacity: 0,
        transformOrigin: "center"
    }, "=.2")
    gsap.from('.after-bg-path-4', {
        delay: 1,
        scaleY: 0,
        opacity: 0,
        transformOrigin: "center"
    }, "=.2")
    gsap.from('.after-bg-path-5', {
        delay: 1.2,
        scaleX: 0,
        opacity: 0,
        transformOrigin: "center"
    }, "=.2")

    // Hero Before Background Animations
    gsap.from('.before-bg-path-1', {
        delay:0.8,
        scaleX:0,
        opacity:0,
    })
    gsap.from('.before-bg-path-2', {
        delay:0.6,
        opactiy:0,
        scale:0,
    })
    gsap.from('.before-bg-path-3', {
        delay:1,
        opactiy:0,
        scaleY:0,
    })

    // Hero Container 
    gsap.from('.hero-heading', {
        delay:1,
        opacity:0,
        y:50,
    })
    gsap.from('.hero-description', {
        delay:1.2,
        opacity:0,
        y:50,
    })
})

console.log('javascript is running');