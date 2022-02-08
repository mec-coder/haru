$(function(){
  
  $('.menu-list ').hover(
    function () {
      $(this).css(
        {'position':'relative',
         'top':'3px'});
    },
    function () {
      $(this).css({
      'position':'static'});
 });


$('.map-outer ').hover(
  function () {
    $(this).css('opacity',0.6);
    $(this).css('brightness','150%');
  },
  function () {
    $(this).css('opacity',1);
    $(this).css('brightness','100%');
});

var menu  = $('.menu-wrapper')
var menuHeight = $('.menu-wrapper').outerHeight(true);
var distance = $('.menu-wrapper').offset().top;

$(window).scroll(function(){
  if ($(this).scrollTop() > distance ){
    menu.addClass('fixed');
    $('header').css('margin-top', menuHeight);
  } else {
    menu.removeClass('fixed');
    $('header').css('margin-top',0)
  };


});


});
