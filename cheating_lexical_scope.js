//cheating lexical scope - using eval (evil)

var bar = "bar";

function foo(str) {
	eval(str);  //cheating!!!
	console.log(bar);  //42
}

foo("var bar = 42;");  //modifies the lexical scope of the function foo at run-time

//another way to cheat lexical scope - using with statement

vari obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

//creates new lexical scope; causes optimizations to be disabled; no allowed in strict mode
with (obj) {
	a = b + c;
	c = b - a;
	d = 3;  //d will become a globally scoped variable
}

obj.d;  // undefined
d;  // resolves to 3