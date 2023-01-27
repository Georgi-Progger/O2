$('.benefit__slider').slick({
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1140,
            settings:{
                arrows: false
            }
        }
    ]   
});
$(document).ready(function(){
    $('.mobile_benefit__slider').slick({
        prevArrow: null,
        nextArrow: null
    });
  });
  $('.arriv_slider').slick({
    prevArrow: $('.slide2-prev'),
    nextArrow: $('.slide2-next'),
    slidesToShow: 5,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
        }
    ]
    });
    $('.news_slider').slick({
        prevArrow: $('.slide3-prev'),
        nextArrow: $('.slide3-next'),
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });