var url = 'http://api.icndb.com/jokes/random';
var $paragraph = $('#joke');

//Random joke on start page
$(function(){
  $.ajax({
    url: url,
    method: "GET",
    success: function(res){
      $paragraph.text(res.value.joke);
    }
  });
});

//Generate new joke
var $button = $('#get-joke').click(function(){
  getJoke();
});

function getJoke(){
  $.ajax({
    url: url,
    method: "GET",
    success: function(res){
      $paragraph.text(res.value.joke);
    }
  });
};
