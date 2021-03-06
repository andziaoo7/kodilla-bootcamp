$(function(){
  function randomString(){
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    var i = 0;
    for(i = 0; i < 10; i++){
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  };

  // COLUMN
  function Column(name){
    var self = this;
    this.id = randomString();
    this.name = name;
    this.$element = createColumn();
    function createColumn(){
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('card-list');
      var $columnAddCard = $('<button>').addClass('add-card btn btn-success').text('Nowe zadanie');
      var $columnDelete = $('<button>').addClass('btn-delete btn btn-danger').text('Usuń zadania');
      console.log($('.column-card-list'));
      $columnDelete.click(function(){
        self.removeColumn();
      });
      $columnAddCard.click(function(event){
        self.addCard(new Card(prompt("Wpisz nazwę karty")));
      });
      $column.append($columnTitle)
        .append($columnAddCard)
        .append($columnDelete)
        .append($columnCardList);
      return $column;
    };
  };
  Column.prototype = {
    addCard: function(card){
      this.$element.children('ul').append(card.$element);
    },
    removeColumn: function(){
      this.$element.remove();
    }
  };

  // CARD
  function Card(description){
    var self = this;
    this.id = randomString();
    //var description = description; //dodano bo description bylo not defined
    this.description = description;
    this.$element = createCard();
    function createCard(){
      var $card = $('<li>').addClass('card');
      var $cardDescription = $('<p>').addClass('card-description').text(self.description);
      var $cardDelete = $('<button>').addClass('btn-delete-task btn btn-default').text('x');

      $cardDelete.click(function(){
        self.removeCard();
      });
      $card.append()
        .append($cardDescription)
        .append($cardDelete);
      return $card;
    };
  };
  Card.prototype = {
    removeCard: function(){
      this.$element.remove();
    }
  };

  // BOARD
  var board = {
    name: 'Tablica Kanban',
    addColumn: function(column){
      this.element.append(column.$element); //wadliwy byl this.$element
      initSortable();
    },
    element: $('#board .column-container')
  };
  function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  };
  $('.create-column').click(function(){
	var name = prompt('Wpisz nazwę kolumny');
	var column = new Column(name);
    	board.addColumn(column);
  });
  // TWORZENIE KOLUMN - do edycji !!!
  var todoColumn = new Column('Do zrobienia');
  var doingColumn = new Column('W trakcie');
  var doneColumn = new Column('Skończone');

  // DODAWANIE KOLUMN DO TABLICY
  board.addColumn(todoColumn);
  board.addColumn(doingColumn);
  board.addColumn(doneColumn);

  // TWORZENIE NOWYCH EGZEMPLARZY KART
  var card1 = new Card('Nowe zadanie');
  var card2 = new Card('Stworzyc tablice kanban');

  // DODAWANIE KART DO KOLUMN
  todoColumn.addCard(card1);
  doingColumn.addCard(card2);
});
$('.card-description').click(function(){
  $('.card').css("border", "1px solid #fff");
});
