function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var a1 = new Foo("a1");

a1.identify();  //"I am a1"

a1.identify = function() {  //Shadowing
  console.log("Hello " + Foo.prototype.identify.call(this) + ".");  //explicitly calls the prototype's identify method
};

//if we used a different function name, then the shaowing wouldn't occur, we could call the prototype identify
//by simply calling this.identify

a1.identify();  //"Hello, I am a1."
