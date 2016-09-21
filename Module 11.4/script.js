var url = 'http://api.icndb.com/jokes/random';

//Random joke on start page
$(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
    console.log("Start joke");
  }
  xhr.send();
});

//Generate new joke
var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});
var xhr = new XMLHttpRequest();
var paragraph = document.getElementById('joke');

function getJoke(){
  // var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
};
