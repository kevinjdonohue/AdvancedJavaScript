function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

//Bar's prototype extends or links to Foo's prototype

//Bar.prototype = new Foo();  // Or...
Bar.prototype = Object.create(Foo.prototype);
//does the first 2 steps from the new keyword:
//1.  brand new empty object created out of thin air
//2.  object gets linked to another object*
//NOTE:  .constructor is borked here, need to fix

Bar.prototype.speak = function() {
  console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();  //"Hello, I am b1."
b2.speak();  //"Hello, I am b2."
