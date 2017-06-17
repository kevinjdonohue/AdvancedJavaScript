function foo(bar) {
	if(bar) {
		console.log(baz);
		let baz = bar;  //let doesn't hoist like var
	}
}

foo("bar");