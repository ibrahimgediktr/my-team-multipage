// Home Hero After Background Animations
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

// Home Hero Before Background Animations
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

// Home Hero Section Animation
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

ScrollTrigger.create({
    trigger: '.features-after-bg',
    toggleClass: 'active',
    start: 'top 85%',
    end: 'top 15%',
})

ScrollTrigger.create({
    trigger: '.testimonial-before-bg',
    toggleClass: 'active',
    start: 'top 75%',
    end: 'top 0%',
})

ScrollTrigger.create({
    trigger: '.testimonial-after-bg',
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 0%',
})


ScrollTrigger.create({
    trigger: '.cta-after-bg',
    toggleClass: 'active',
    start: 'top 80%',
    end: 'top 0%',
})