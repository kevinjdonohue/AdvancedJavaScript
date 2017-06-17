//incorrect implemention where we might think i would be printed as 1, 2, 3, 4, 5 and 6
//instead i is simply 6
//why? - this syntax is no different than if we had 5 setTimeout calls in a row
//-- they are using the same lexical scope

// for(var i=1; i<=5; i++) {
//   setTimeout(function() {
//     console.log("blah: " + blah);
//   }, i*1000);
// }

//corrected with an IIFE:
// for(var j=1; j<=5; j++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log("j: " + j);
//     }, j*1500);
//   })(j);
// }

//corrected with let keyword
// for(let k=1; k<=5; k++) {
//   setTimeout(function() {
//     console.log("k: " + k);
//   }, k*1000);
// }

//anti-example - object reference not a function reference
//doesn't demonstrate closure because its not a function that is being executed outside of its lexical scope.
var foo = (function() {
  var o = { bar: "bar" };
  return { obj: o };
})();

console.log(foo.obj.bar);
