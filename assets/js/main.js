$(document).ready(function(){
    var toggleMenu = $('.toggle-menu');
    var navList = $('.navbar-list');
    var navLinks = $('.navbar-link');
    // var navLinks = [1,2,3];

    toggleMenu.click(function(){
        navList.toggleClass('active');
        toggleMenu.toggleClass('active');

        navLinks.each(function(index, link){
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8}s`
            }
            console.log(index / 30);
        })

        // function animate(elem){
        //     var el = elem.shift();
        //     if(el){
        //         return $("#" + el).animate({
        //             opacity:0,
        //             right:"-50px",
        //         }, 500, function(){
        //             return $(this).animate({
        //                 opacity:1,
        //                 right:"0"
        //             },500)
        //         }).promise().then(animate.bind(null, elem))
        //     }
        // }
        // animate(elem)
    })

})

console.log('javascript is running');