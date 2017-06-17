//block scope - via the let keyword from ES6
//let keyword - cousin to var

function foo() {
	var bar = "bar";
	for(let i=0; i<bar.length; i++) {
		console.log(bar.charAt(i));
	}
	console.log(i);  //ReferenceError - the scope of i is only within the for loop
}

//another example:

function foo(bar) {
	if(bar) {
		let baz = bar; //attaches baz to the if statement
		if(baz) {
			let bam = baz;  //attaches bam to the if statement
		}
		console.log(bam);  //Error!  can't access bam because its scoped to the second if statment
	}
	console.log(baz);  //Error!  can't access baz because its also scoped to the first if statement
}

foo("bar");

//better alternative to above let example
//we create an explicit block with the let keyword to create a scope
//!!REJECTED BY ES6!!
function foo(bar) {
	let (baz = bar) {
		console.log(baz);  //"bar"
	}
	console.log(baz);  //Error
}

foo("bar");

