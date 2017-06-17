var foo = "bar";

function bar() {

	var foo = "baz";

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}
	baz();
}

//bar() here is an RHS - because there isn't any assignment being made
bar();
//foo here is also an RHS - same reason - "bar"
foo;
//bam here is also an RHS - same reason - "yay"
bam;
//baz here is also an RHS - not automatically created; reference error will occur - Error!
baz();