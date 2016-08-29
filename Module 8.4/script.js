var player = {
  name: '',
  score: 0,
  pick: ''
};

var computer = {
  name: 'computer',
  score: 0,
  pick: ''
};

var round = 0;

var newGame = function(){
  computer.score = 0;
  computer.pick = "";
  player.score = 0;
  player.pick = "";
  round = 0;
  player.name = prompt("Jak się nazywasz?", "Jan Kowalski");
  document.getElementById("playerName").innerHTML = player.name;
}
