//hoisting

// 1.  Finds the declarations first - var a, var b
// 2.  Handles assignments next

a;
b;
var a = b;
var b = 2;
b;
a;

//how the compiler sees it:

var a;
var b;

a = b;
b = 2;

b;
a;

//another example:

// 1. Finds the function declaration
// 2. Next finds the variable declarations - var a; var c; var d;
// 3. Finally, find the function expression - d = function ...

var a = b();
var c = d();

a;
c;

function b() {
	return c;
}

var d = function() {
	return b();
}

//how the compiler sees it:

function b() {
	return c;
}

var a;
var c;
var d;

a = b();
c = d();
a;
c;

d = function () {
	return b();
};
