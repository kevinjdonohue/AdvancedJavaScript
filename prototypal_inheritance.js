//OLOO: objects linked to other objects

//Transformed original code into OLOO

// Step 3:
// Instead of:

//function Foo(who) {
//	this.me = who;
//}
//
//Foo.prototype.identify = function() {
//	return "I am " + this.me;
//};

// Do this:
var Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

// Step 2:
// Instead of:

//function Bar(who) {
//	Foo.call(this, who);
//}
//
//Bar.prototype = Object.create(Foo.prototype);
//
//Bar.prototype.speak = function() {
//	console.log("Hello, " + this.identify() + ".");
//};

// Do this:

// Step 3 (modified):
//var Bar = Object.create(Foo.prototype);
var Bar = Object.create(Foo);

// Step 3 - no longer need init, getting init from Foo
//Bar.init = function(who) {
//	Foo.call(this, who);
//};

Bar.speak = function() {
	console.log("Hello, " + this.identify()+ ".");
};

// Step 1:
// Instead of:

// var b1 = new Bar("b1");

// Do this:
var b1 = Object.create(Bar);

// Step 2:
// Intead of:

// Bar.call(b1, "b1");

// Do This:
b1.init("b1");

b1.speak();  //"Hello, I am a1"



