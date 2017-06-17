
//not just a single statement but 2 distinct statments:
// 1. variable declaration
// 2. variable initialization

//foo is a LHS (target), "bar" is a RHS(source)
var foo = "bar";

function bar() {
	var foo = "baz";
}

//foo parameter is treated as a declaration in the baz scope (function scope)
//just as if we did var foo within this function

//foo is a LHS(target), "bam" is a RHS(source)
//bam is a LHS(target) - not in the local scope, scope manager keeps looking for it until it finds it
//if we get to global scope and bam isn't declared (as it wasn't here), global scope (non-strict mode) will create a global variable for you
function baz(foo) {
	foo = "bam";
	bam = "yay";
}

