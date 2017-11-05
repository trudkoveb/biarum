// Slider
$(document).ready(function($) {
// Big slider
$('.big-slider').unslider({
    arrows: false,
    autoplay: true,
    delay: 5000
});
// Small slider
$('.small-slider').unslider({
    arrows: true,
    nav: false,
    autoplay: true,
    delay: 5000
});
// Mobile small slider
$('.small-slider__mobile').unslider({
    arrows: true,
    nav: false
    // autoplay: true,
    // delay: 5000
});
// Mobile menu show
$(".mobile-menu-icon").click(function(){
    $(".mobile-menu").toggle('slow');
});
//
$('.main-content').click(function () {
    $('.mobile-menu').hide('slow');
});
// Scroll btn & header change
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
      $('.scrollup').fadeIn();
      $('header').addClass('scroll-header');
  } else {
      $('.scrollup').fadeOut();
      $('header').removeClass('scroll-header');
  }
});
$('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});
});


// Disable submit btn without fill inputs
function checkParams() {
    var name = $('#name').val();
    var surname = $('#surname').val();
    var mail = $('#mail').val();

    if(name.length != 0 && surname.length != 0 && mail.length != 0) {
        $('#submit').removeAttr('disabled');
        $('#submit').removeClass('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
        $('#submit').addClass("disabled");
    }
}


