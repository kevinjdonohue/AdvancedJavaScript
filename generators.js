//ES6 only - gene

function* gen() {
	console.log("Hello");
	yield null;
	console.log("World");
}

var iterator = gen();

iterator.next();
iterator.next();

var run = coroutine(function*() {
	var x = 1 + (yield null);
	var y = 1 + (yield null);
	yield (x + y);
});

run();

run(10);

console.log("Meaning of life " + run(30).value);
