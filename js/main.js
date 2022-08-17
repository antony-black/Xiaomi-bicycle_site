$(function(){

  $('.btn-mobile').on('click', function(){
    $('.btn-mobile__line').toggleClass('active');
  });
  
 $('.btn-mobile').on('click', function(){
  $('.menu__list').toggleClass('active');
 });



 $('.slider-box, .main-slider__box').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
 });


});