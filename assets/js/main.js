$(document).ready(function () {
    var toggleMenu = $('.toggle-menu');
    var navList = $('.navbar-list');
    var navLinks = $('.navbar-link');
    var nav = $('.navbar');

    toggleMenu.click(function () {
        navList.toggleClass('active');
        toggleMenu.toggleClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });


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