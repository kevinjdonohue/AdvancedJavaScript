//prior to line 1:

//function called Object
//Object.prototype --> object
//toString(), etc. all come from the prototype

//afterwards:

//creates a function called foo with an Object called prototype
//foo.prototype  --> Object
//Object.constructor --> foo

function Foo(who) {
  this.me = who;
}

//places .identify directly on the Object
Foo.prototype.identify = function() {
  return "I am " + this.me;
};

//new:  1)  Brand new object gets created, 2) Object linkage, 3) this keyword/context gets set, 4)  returns this
var a1 = new Foo("a1");
//same process as previous line
var a2 = new Foo("a2");

//adds .speak on the a2 Object
a2.speak = function() {
  alert("Hello, " this.identify() + ".");
};

//a1.constructor doesn't exist, so it goes up the prototype chain until it finds .constructor
//a1 is linked to the prototype:  a1 --[[prototype]]--> prototype
a1.constructor === Foo;
a1.constructor === a2.constructor;

//dunder proto --> __proto__; finally standardized in ES6
//similar to above, first looks locally for dunder proto, then up to prototype, then up to Object
//private:  [[prototype]]
//public:  __proto__
a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;

//method for accessing the dunder proto, since its a private, Object.getPrototypeOf()
a1.__proto__ === Object.getPrototypeOf(a1);
a2.constructor === Foo;
a1.__proto__ == a2.__proto__;
a2.__proto__ == a2.constructor.prototype;
