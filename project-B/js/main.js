jQuery(document).ready(function ($) {
    $('.partner-block').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplayspeed: 2000,
        prevArrow:".left",
        nextArrow:'.right',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
    });
});




window.onscroll = function() {scrollFunction()};
var nav = document.getElementById('nav')
var sticky = nav.offsetTop


function scrollFunction()
{
    if(window.pageYOffset >=sticky)
    {
        nav.classList.add('fixed');
        nav.style.borderBottom="0.5px solid #eeeeee"; 
        
    }
    else
    {
        nav.classList.remove('fixed');
        nav.style.borderBottom="";

    }
}
