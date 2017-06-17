function foo() {
  var bar = "bar1";
  this.baz = baz;
  this.baz();
}

function baz() {
  console.log(this.bar);
}

var bar = "bar2";

foo();  //???
