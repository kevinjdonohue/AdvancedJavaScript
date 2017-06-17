//when we place "new" keyword in front of a function into a "constructor call"

function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();  //undefined + " " + undefined
console.log(baz.baz);  //will print out "baz" since baz variable was assigned the foo() function which set this.baz
