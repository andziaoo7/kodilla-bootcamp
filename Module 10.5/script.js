function Button(text){
  this.text = text || "Hello";
};

Button.prototype = {
  create: function() {
     var self = this; //moze byc zmienna w fukcji click podana? NIE ! przed funkcją w ktorej traci sie kontekst (czyli tutaj ma to miejsce w funkcji create) musi byc zadeklarowana zmienna self
    this.$element = $("<button>").addClass('btn btn-primary');
    this.$element.text(this.text);
    this.$element.click(function(){
      //var self = this; wtedy text jest undefined
      alert(self.text);
    });
    $("body").append(this.$element);
  }
};

var btn1 = new Button("Hello!");
btn1.create();
