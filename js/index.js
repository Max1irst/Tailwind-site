
$(document).ready(function () {
    // $('button').click(function () {
    //     $('div').removeClass('flex');
    // });

    // slick-sliders
    $('.slick-slader').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
            
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
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
      });
      

      $('dt').click(function(){
        $('dd').toggleClass('hidden')
      })
});