function foo() {
  console.log("bar: " + this.bar);
}

var bar = "bar1";
var o2 = {bar: "bar2", foo: foo};
var o3 = {bar: "bar3", foo: foo};

foo();  //"bar1" - explicit binding rule
o2.foo();  //"bar2" - implicit binding rule
o3.foo();  //"bar3" - implicit binding rule
