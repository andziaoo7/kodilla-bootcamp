var array = [1, 2, 3, "mm", "b", "c", "mm", "y", "mm"];

var list = document.getElementById("list");
var addText = function(array) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] == "mm") {
      var listItem = document.createElement("LI");
      var text = array[i];
      listItem.innerHTML = text;
      list.appendChild(listItem);
    }
  };
};
addText(array);
