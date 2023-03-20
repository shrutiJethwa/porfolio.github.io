$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY>20)
        {
            $('.navbar1').addClass("sticky");
        }
        else
        {
            $('.navbar1').removeClass("sticky");
        }
        if(this.scrolly>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });



    $('.menu-btn1').click(function(){
        $('.navbar1 .menude').toggleClass("active");
    });

/* typing animation */
var typed=new Typed(".typing",{
    strings:["Devloper","Designer","Freelancer","Coder"],
    typeSpeed:60,
    backSpeed:60,
    loop:true
});

var typed=new Typed(".typing2",{
    strings:["Devloper","Designer","Freelancer","Coder"],
    typeSpeed:60,
    backSpeed:60,
    loop:true
});

    //owl carousel
    $('.carousel').owlCarousel({
            margin:20,
            loop:true,
            autoplayTime:2000,
            autoplayHoverPause:true,
            0:{
                items:1,
                nav:false
            },

            600:{
                items:2,
                nav:false
            },

            1000:{
                items:3,
                nav:false
            }

    });



    $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
});