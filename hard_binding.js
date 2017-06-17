function foo() {
  console.log(this.bar);
}

var obj = {bar: "bar"};
var obj2 = {bar: "bar2"};

var orig = foo;

foo = function() {
  orig.call(obj);
};

foo();  //"bar"
foo.call(obj2);  //"bar"
