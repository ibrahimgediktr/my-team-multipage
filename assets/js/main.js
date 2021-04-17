$(document).ready(function () {
    var $toggleMenu = $('.toggle-menu');
    var $navList = $('.navbar-list');
    var $navLinks = $('.navbar-link');
    var $nav = $('.navbar');

    $toggleMenu.click(function () {
        $navList.toggleClass('active');
        $toggleMenu.toggleClass('active');
    });

    // Navbar Scrolled Fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $nav.addClass("scrolled");
        } else {
            $nav.removeClass("scrolled");
        }
    });


    // Meet Directors Hidden Card
    var $directorsCardBtn = $('.directors-card-btn');
    var $directorsCard = $('.directors-card');

    $directorsCardBtn.each(function (index) {
        $(this).on('click', function () {
            $directorsCard.removeClass('active')
            $(this).parent().addClass('active')
        })
    })

    // Contact Page Form Validation
    $(function(){
    var $contactForm = $('#contactForm');
    if($contactForm.length){
        $contactForm.validate({
            rules:{
                name:"required",
                emailAddress:{
                    required:true,
                    email:true,
                },
                companyName:"required",
                title:"required",
                message:"required"
            },
            messages:{
                name:{
                    required:'This field is required'
                },
                emailAddress:{
                    required:'This field is required'
                },
                companyName:{
                    required:'This field is required'
                },
                title:{
                    required:'This field is required'
                },
                message:{
                    required:'This field is required'
                },
            },
            submitHandler: function(form){
                form.submit();
            }
        })
    }
  
    })
})