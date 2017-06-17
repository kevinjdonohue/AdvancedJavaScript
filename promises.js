//promises

//e.g.:
// like getting fast food -you first get a receipt for your food with a number on it
// and later when the food is ready you trade the receipt for the food

//"continuation events" - events for function calls

//jQuery example:

var wait = jQuery.Deferred();

var p = wait.promise();

p.done(function(value) {
	console.log(value);
});

setTimeout(function() {
	wait.resolve(Math.random());
});

//Wait for N Function Example:

function waitForN(n) {
	var d = $.Deferred();
	setTimout(d.resolve, n);
	return d.promise();
}

waitForN(1000)
	.then(function() {
		console.log("Hello World");
		return waitForN(2000);
	})
	.then(function() {
		console.log("finally!");
	});


