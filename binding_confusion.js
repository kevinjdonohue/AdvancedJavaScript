function foo() {
  var bar = "bar1";
  baz();
}

function baz() {
  console.log(this.bar);
}

var bar = "bar2";

foo();  //??? won't work as expected
