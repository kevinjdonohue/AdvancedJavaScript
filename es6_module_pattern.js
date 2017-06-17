//ES6 - future module pattern - doesn't require the wrapping function

var o = { bar: "bar" };

export function bar() {
  return o.bar;
}
