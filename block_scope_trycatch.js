//block scope

var foo;

try {
	foo.length;
}
catch (err) {
	console.log(err);  //TypeError
}

console.log(err);  //ReferenceError