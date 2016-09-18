$(function(){
  var carouselList = $("#carousel ul");
  var slideLeft = function(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
  var changeImage = function(){
    carouselList.animate({"marginLeft": -400}, 500, slideLeft);
  };
  setInterval(function(){
    changeImage()}, 3000);
});
<<<<<<< HEAD

var $firstImage = $('li:first'); //czemu $('li:first', 'ul')? po co jeszcze daje się 'ul'?
var $lastImage = $('li:last');
$('#next').click(function(){
  var $next;
  var $active = $(".active");
  $next = $active.next('li').length ? $active.next('li') : $firstImage;
  $active.removeClass('active').fadeOut('fast');
  $next.addClass('active').fadeIn('fast');
});

$('#prev').click(function(){
  var $prev;
  var $active = $(".active");
  $prev = $active.prev('li').length ? $active.prev('li') : $lastImage;
  $active.removeClass('active').fadeOut('fast');
  $prev.addClass('active').fadeIn('fast');
});
=======
// $('.nextSlide').click(function() {
//     var currentSlide = $('.active-slide');
//     var nextSlide = currentSlide.next();
//
//     currentSlide.removeClass('active-slide');
//     nextSlide.addClass('active-slide');
//   });
>>>>>>> 42398cd4365deb4396a0a44cc5bbea2056eac6cf
