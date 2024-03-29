
$(document).ready(function () {
  // $('button').click(function () {
  //     $('div').removeClass('flex');
  // });

  // slick-sliders
  $('.slick-slader').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          arrows: false,
          speed: 300,
          slidesToShow: 2,
          centerMode: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  })
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.slider-for',
    arrows: true,
    focusOnSelect: true
  });

  $('.products-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });


});