// funkcja konstrukcyjna
function Phone(brand, price, colour){
  this.brand = brand;
  this.price = price;
  this.colour = colour;
};

Phone.prototype.printInfo = function(){
  console.log("Marka telefonu to " + this.brand + ", kolor to " + this.colour + ", a cena to " + this.price + ".");
};

var samsung = new Phone("Samsung Galaxy S6", 2000, "czarny");
var iphone = new Phone("iPhone 6s", 4000, "złoty");
var onePlus = new Phone("OnePlus One", 1000, "biały");

samsung.printInfo();
iphone.printInfo();
onePlus.printInfo();
