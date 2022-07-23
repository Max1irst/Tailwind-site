
$(document).ready(function () {
    // $('button').click(function () {
    //     $('div').removeClass('flex');
    // });
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
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        arrows: true,
        focusOnSelect: true
      });
      
});