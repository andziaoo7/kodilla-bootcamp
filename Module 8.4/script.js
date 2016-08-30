var player = {
  name: '',
  score: 0,
  pick: ''
};

var computer = {
  name: 'Computer',
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
  var buttons = document.getElementsByClassName("pick-button");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'visible';
  };
};

var playerPick = function(pick){
  player.pick=pick;
  computerPick();
  checkResult();
  selectWinner();
};

var computerPick = function(){
  switch (Math.floor(Math.random()*3)){
    case 0:
    computer.pick='rock';
    break;
    case 1:
    computer.pick='paper';
    break;
    case 2:
    computer.pick='scissors';
    break;
  }
};

var checkResult = function(){
  var gameResult;
  if (player.pick === computer.pick) {
      gameResult = "Tie!";
  }
  else if (player.pick=='rock' && computer.pick=='paper') {
    computer.score++;
    gameResult="Computer wins!";
  }
  else if (player.pick=='rock' && computer.pick=='scissors') {
    player.score++;
    gameResult=player.name + " wins!";
  }
  else if (player.pick=='paper' && computer.pick=='rock') {
    player.score++;
    gameResult=player.name + " wins!";
  }
  else if (player.pick=='paper' && computer.pick=='scissors') {
    computer.score++;
    gameResult="Computer wins!";
  }
  else if (player.pick=='scissors' && computer.pick=='rock') {
    computer.score++;
    gameResult="Computer wins!";
  }
  else if (player.pick=='scissors' && computer.pick=='paper') {
    player.score++;
    gameResult=player.name + " wins!";
  };
  document.getElementById("playerPick").innerHTML = player.pick;
  document.getElementById("computerPick").innerHTML = computer.pick;
  document.getElementById("gameResult").innerHTML = gameResult;
  document.getElementById("playerScore").innerHTML = player.score;
  document.getElementById("computerScore").innerHTML = computer.score;
};

var selectWinner = function(){
  if (player.score >= 10 || computer.score >= 10) {
    if (player.score > computer.score) {
      document.getElementById("roundResult").innerHTML = player.name + " wins the game!";
    }
    else {
      document.getElementById("roundResult").innerHTML = "Computer wins the game!";
    }
    var buttons = document.getElementsByClassName("pick-button");
    for(var i = 0; i < buttons.length; i++) {
      buttons[i].style.visibility = 'hidden';
    };
  };
};
