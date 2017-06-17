function foo() {
  console.log(this.bar);
}

var bar = "bar1";

var obj = {bar: "bar2"};

foo();  //"bar1"

//NOTE:  call() method calls a function with a given "this" value and arguments provided individually
//NOTE:  apply() method calls a function with a given "this" value and arguments provided as an array

foo.call();  //"bar1"
foo.apply();  //"bar1"
foo.call(obj);  //"bar2"
foo.apply(obj);  //"bar2"
