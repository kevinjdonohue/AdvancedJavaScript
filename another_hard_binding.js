function bind(fn, o) {
  return function() {
    fn.call(o);  //this the call site, not below
  };
}

function foo() {
  console.log(this.bar);
}

var obj = {bar: "bar"};
var obj2 = {bar: "bar2"};

foo = bind(foo, obj);

foo();  //"bar"
foo.call(obj2);  //"bar"
