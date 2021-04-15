// About CTA Section Animation
ScrollTrigger.create({
    trigger: '.cta-after-bg',
    toggleClass: 'active',
    start: 'top 80%',
    end: 'top 0%',
})

// Meet Directors Hidden Menu
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