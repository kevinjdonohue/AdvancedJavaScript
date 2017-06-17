function foo() {
  var bar = "bar";

  return function() {
    console.log(bar);
  };
}

function bam() {
  foo()();
}

bam();


//more examples:

function anotherFoo() {
  var bar = "Hello from bar inside anotherFoo";

  setTimeout(function () {
    console.log(bar);
  }, 1000);
}

anotherFoo();

//yet another example:

function setTimeouts() {
  var bar = 0;

  setTimeout(function () {
    var baz = 1;
    console.log("first setTimeout call: " + bar++);

    setTimeout(function() {
      console.log("second setTimeout call: " + (bar + baz));
    }, 200);

  }, 100);
}

setTimeouts();  //  0  2
