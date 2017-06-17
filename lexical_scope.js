//lexical scope - classical scoping model
//(def) compile time scope- decisions about scope were made at compile time

//scoping goes from current level, and then up a level, and again until you get to global scope

function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar);  //lexical
	}
	baz();
}
foo();


//dynamic scope - this keyword

