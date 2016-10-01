var url = 'https://restcountries.eu/rest/v1/name/';
var countryName = $('#country-name').val();
$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
  	url: url + countryName,
  	method: 'GET',
  	success: showCountriesList
  });
}
function showCountriesList(resp){
  var tbody = $('#tbody');
  tbody.empty();
  $('.table').css('visibility', 'visible');

  resp.forEach(function(item){
    var tr = $('<tr>');
    var foundedCountry = $('#founded-country');
    var capital = $('#capital');
    var region = $('#region');
    var population = $('#population');

    tr.appendTo(tbody);
    $('<td class="founded-country">').text(item.name).appendTo(tr);
    $('<td>').text(item.capital).appendTo(tr);
    $('<td>').text(item.region).appendTo(tr);
    $('<td>').text(item.population).appendTo(tr);
  });
};
$('#country-name').keypress(function(event){
  if(event.keyCode === 13){
    searchCountries();
    console.log('pressed enter');
  }
});
