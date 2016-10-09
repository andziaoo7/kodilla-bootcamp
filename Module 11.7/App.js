var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
 'X-Client-Id': 54,
 'X-Auth-Token': '5f34f4f39e8c48bfcd3431d89f87b1d2'
};

$.ajaxSetup({
	headers: myHeaders
});
$.ajax({
  url: baseUrl + '/board',
  method: 'GET',
  success: function(response) {
    setupColumns(response.columns);
  }
});
function setupColumns(columns) {
  columns.forEach(function(column) {
  	var column = new Column(column.id, column.name);
    board.createColumn(column);
		setupCards(column, column.cards);
  });
};
function setupCards(column, cards) {
	cards.forEach(function(card) {
    var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    column.createCard(card);
  });
};
