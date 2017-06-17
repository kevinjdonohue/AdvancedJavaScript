//function scope

var foo = "foo";

//IIFE expression - Immediately Invoked Function Expression - IIFE pattern from benalman.com
//this allows us to create a new lexical scope for our 2 lines
(function iife() {
	var foo = "foo2";
	console.log(foo);  // "foo2"
})();

console.log(foo);  // "foo"

//alternatives

(function iife(bar) {
	var foo = bar;
	console.log(foo);  // "foo"
})(foo);

//Crockford's style:
(function iife(bar) {
	var foo = bar;
	console.log(foo);
}(foo);)

console.log(foo);  // "foo"