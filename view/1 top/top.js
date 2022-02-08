$(function(){
  $('.slider').slick({
    speed: 1000,
    autoplay:true,
    autoplaySpeed:3500,
    dots:false,
    pauseOnHover:false,
    fade:true
}
);

 $('.notice ').hover(
  function () {
    $(this).css('opacity',0.8);
    $(this).css('brightness','120%');
  },
  function () {
    $(this).css('opacity',1);
    $(this).css('brightness','100%');
});

});