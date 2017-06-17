
//expression - not a function declaration - because the statement doesn't start with the word function
var foo = function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo;  //this references the function
	}
	baz();
};

foo();
bar(); //this results in an error because it doesn't exist in global scope - can't fire bar because it was assigned to foo in the expression

