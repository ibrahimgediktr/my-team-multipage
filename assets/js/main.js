$(document).ready(function () {

    var toggleMenu = $('.toggle-menu');
    var navList = $('.navbar-list');
    var navLinks = $('.navbar-link');
    var nav = $('.navbar')

    toggleMenu.click(function () {
        navList.toggleClass('active');
        toggleMenu.toggleClass('active');
        gsap.fromTo(navLinks, {
            delay: 0.2,
            x: 100,
            scale: 0,
        }, {
            x: 0,
            scale: 1,
            stagger: 0.2
        })
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

    // Hero After Background Animations
    gsap.from('.after-bg-path-1', {
        delay: 0.4,
        opacity: 0,
        scale: 0,
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
        delay: 0.8,
        scaleX: 0,
        opacity: 0,
    })
    gsap.from('.before-bg-path-2', {
        delay: 0.6,
        opacity: 0,
        scale: 0,
    })
    gsap.from('.before-bg-path-3', {
        delay: 1,
        opacity: 0,
        scaleY: 0,
    })

    // Hero Section Animation
    gsap.from('.hero-heading', {
        delay: 1,
        opacity: 0,
        y: 40,
    })
    gsap.from('.hero-description', {
        delay: 1.2,
        opacity: 0,
        y: 40,
    })

    // Features Section Animation
    gsap.registerPlugin(ScrollTrigger);


    gsap.set('.features-heading', {
        x: -1000,
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: '.features-heading',
        start: 'top 90%',
        end: 'top 10%',
        onEnter: () => gsap.to('.features-heading', {
            x: 0,
            opacity: 1,
        }),
        onLeaveBack: () => gsap.to('.features-heading', {
            x: -1000,
            opacity: 0,
        })
    })

    gsap.utils.toArray('.features-list').forEach(() => {
        var elems = $('.features-list-item');

        gsap.set(elems, {
            x: 1000,
            opacity: 0,
        })
        ScrollTrigger.create({
            trigger: '.features-list-item',
            start: 'top 80%',
            end: 'top 20%',
            onEnter: () => gsap.to(elems, {
                x: 0,
                opacity: 1,
                stagger: 0.2,
                delay: 0.2,
            }),
            onLeaveBack: () => gsap.to(elems, {
                x: 1000,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                delay: 0.2,
            })
        })
    });

    gsap.set('.features-after-bg', {
        x: 1000,
        opacity: 0
    });
    gsap.set('.features-after-bg-path-1', {
        scaleY: 0,
        opacity: 0
    });
    gsap.set('.features-after-bg-path-2', {
        scale: 0,
        opacity: 0
    });
    gsap.set('.features-after-bg-path-3', {
        scaleY: 0,
        opacity: 0
    });

    ScrollTrigger.create({
        trigger: '.features-after-bg',
        start: 'top 90%',
        end: 'top 10%',
        onEnter: () => gsap.to('.features-after-bg', {
            x: 0,
            opacity: 1,
            delay: 0.4,
        }),
        onLeaveBack: () => gsap.to('.features-after-bg', {
            x: 1000,
            opacity: 0,
            delay: 0.4,
        })
    })
    ScrollTrigger.create({
        trigger: '.features-after-bg-path-1',
        start: 'top 90%',
        end: 'top 10%',
        onEnter: () => gsap.to('.features-after-bg-path-1', {
            scaleY: 1,
            opacity: 1,
            delay: 0.6,
        }),
        onLeaveBack: () => gsap.to('.features-after-bg-path-1', {
            scaleY: 0,
            opacity: 0,
            delay: 0.6,
        })
    })

    ScrollTrigger.create({
        trigger: '.features-after-bg-path-1',
        start: 'top 90%',
        end: 'top 10%',
        onEnter: () => gsap.to('.features-after-bg-path-2', {
            scale: 1,
            opacity: 1,
            delay: 0.8,
        }),
        onLeaveBack: () => gsap.to('.features-after-bg-path-2', {
            scale: 0,
            opacity: 0,
            delay: 0.8,
        })
    })

    ScrollTrigger.create({
        trigger: '.features-after-bg-path-3',
        start: 'top 90%',
        end: 'top 10%',
        onEnter: () => gsap.to('.features-after-bg-path-3', {
            scale: 1,
            opacity: 1,
            delay: 1,
        }),
        onLeaveBack: () => gsap.to('.features-after-bg-path-3', {
            scaleY: 0,
            opacity: 0,
            delay: 1,
        })
    })










})

console.log('javascript is running');