var url = 'http://api.icndb.com/jokes/random';
var xhr = new XMLHttpRequest();
var paragraph = document.getElementById('joke');

//Random joke on start page
$(function(){
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

function getJoke(){
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
};
