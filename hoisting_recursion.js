var result = a(1);
console.log("result: " + result);

function a(foo) {
	console.log("a(foo): " + foo);
	if (foo > 20) {
		return foo;
	}
	return b(foo + 2);
}

function b(foo) {
	console.log("b(foo): " + foo);
	return c(foo) + 1;
}

function c(foo) {
	console.log("c(foo): " + foo);
	return a(foo * 2);
}