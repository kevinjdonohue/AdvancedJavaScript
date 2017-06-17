//Classic Module Pattern

//1.  must be an outer wrapping Function
//2.  1 or more inner functions that is returned with closure

//allows you to hide functions within a module, public/private
	
var foo = (function() {
  var o = { bar: "bar" };
  return {
    bar: function() {
      console.log(o.bar);
    }
  };
})();

foo.bar();  //"bar"

//another example:

var bar = (function() {
  var publicAPI = {
    function1: function() {
      publicAPI.function2();
    },
    function2: function() {
      console.log("baz");
      function3();
    }
  };

  function3 = function() {
    console.log("function3");
  }
  return publicAPI;
})();

bar.function1();  //"baz"
