//NOTE:  As of ES5, bind is a built in function
// if(!Function.prototype.bind2) {
//   Function.prototype.bind2 =
//     function(o) {
//       var fn = this;
//       return function() {
//         return fn.apply(o, arguments);
//       };
//     };
// }

function foo(name) {
  console.log(this.bar + " " + name);
}

var obj = { bar: "hello" };
var obj2 = { bar: "howdy" };

foo = foo.bind(obj);

foo("kevin");  //"hello kevin"

foo = foo.bind(obj2);

foo("kevin");
