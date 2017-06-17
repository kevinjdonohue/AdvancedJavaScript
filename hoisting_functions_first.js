foo();  //"foo"

var foo = 2;

function foo() {
	console.log("bar");
}

function foo() {
	console.log("foo");
}

//how the compiler sees it:

function foo() {
	console.log("bar")
}

//then it would redefine function foo as:

function foo() {
	console.log("foo");
}

//finally it would create a globally scoped variable called foo (never used)
//because of this beahavior the foo() call at the top of the page would generate "foo"

