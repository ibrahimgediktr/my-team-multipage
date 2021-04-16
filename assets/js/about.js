$(document).ready(function(){

// About Hero Section Animations
gsap.from('.about-hero-heading', {
    delay: 1,
    opacity: 0,
    y: 40,
})
gsap.from('.about-hero-description', {
    delay: 1.2,
    opacity: 0,
    y: 40,
})


// About Hero After Background Animation
gsap.from('.about-hero-after-bg-path-1', {
    delay: 0.2,
    opacity: 0,
    scale: 0,
}, "=.2")

gsap.from('.about-hero-after-bg-path-2', {
    delay: 0.6,
    opacity: 0,
    scale: 0,
}, "=.2")

gsap.from('.about-hero-after-bg-path-3', {
    delay: 1,
    opacity: 0,
    scaleX: 0,
}, "=.2")

// Directors Section Before Background Animation
gsap.from('.directors-before-bg-path-1', {
    delay: 0.2,
    opacity: 0,
    scale: 0,
}, "=.2")

gsap.from('.directors-before-bg-path-2', {
    delay: 0.4,
    opacity: 0,
    scale: 0,
}, "=.2")

gsap.from('.directors-before-bg-path-3', {
    delay: 0.8,
    opacity: 0,
    scale: 0,
}, "=.2")

gsap.from('.directors-before-bg-path-4', {
    delay: 1.4,
    opacity: 0,
    scaleY: 0,
}, "=.2")



// About CTA Section Animation
ScrollTrigger.create({
    trigger: '.cta-after-bg',
    toggleClass: 'active',
    start: 'top 80%',
    end: 'top 0%',
})

// Meet Directors Hidden Card
var directorsCardBtn = $('.directors-card-btn');

directorsCardBtn.each(function () {
    $(this).on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        if ($(this).parent().hasClass('active')) {
            $(this).parent().prev().removeClass('active');
            gsap.fromTo('.directors-card-hidden.active > *', {
                x: 350,
            }, {
                x: 0,
            })
        }
    })
})
})