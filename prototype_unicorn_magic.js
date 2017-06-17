function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

Foo.prototype.speak = function() {
  console.log("Hello, " + this.identify() + ".");  //super unicorn magic == no shadowing allows you flexibility
};

var a1 = new Foo("a1");

a1.speak();  //"Hello, I am a1"
