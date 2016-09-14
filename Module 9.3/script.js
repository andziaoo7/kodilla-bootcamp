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
// $('.nextSlide').click(function() {
//     var currentSlide = $('.active-slide');
//     var nextSlide = currentSlide.next();
//
//     currentSlide.removeClass('active-slide');
//     nextSlide.addClass('active-slide');
//   });
