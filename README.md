# AdvancedJavaScript
A repo to contain my notes and code examples from the Advanced JavaScript course by Kyle Simpson on PluralSight.

## Scope, Closures
* Nested Scope
* Hoisting
* this
* Closure

Scope:  where to look for "things" - variables (lexical identifiers)

Current version - JavaScript has function scope

## this keyword
Every function while executing has a reference to its current execution context called this.

this ~ dynamic scope

call site - location where the function is called

default call site example:  foo();

4 rules (from spec) regarding the this keyword (in order of precedence):

1. new keyword rule - when using the new keyword,
1. explicit binding rule - when using .call or .apply at the call site, 1st param is this (arg)
1. implicit binding rule - base object/context object at the call site becomes the this keyword
1. default binding rule - if you are in strict mode, this is undefined, otherwise this is global

hard binding - make it such that you can predict what "this" is

whenever the "new" keyword is used:

1. brand new empty object created out of thin air
1. object gets linked to another object*
1. bound as the this keyword
1. if the function doesn't return anything, implicitly return this

How To Use The 4 Rules (find the call site and ask these 4 Rules):

1. Was the function called with "new"?
1. Was the function called with "call" or "apply" specifying an explicit this?
1. Was the function called via a containing/owning object(context)?
1. DEFAULT:  global object (except strict mode)

## Closure

from lambda calculus

(def) Closure is when a function "remembers" its lexical scope
even when the function is executed outside that lexical scope.

created when an inner function is transported outside of a given function (returned)

## Object Orienting

Common OO Patterns
Prototype
Inheritance vs. Behavior Delegation

prototype

Every single "object" is built by a constructor function

Each time a constructor is called, a new object is created; not an "instance"

A constructor makes an object linked to (based on) its own prototype

A constructor is a statement with the "new"

[[Prototype]] is a prototype linkage

The affect is that prototype chain keeps delegating up the chain until there is resolution

3 ways to find out where an object's [[Prototype]] points to:

1. .__proto__ (dunder proto)
1. Object.getPrototypeOf
1. .constructor.prototype  (hacky)

## Prototypal Inheritance

In essence in reverse of classical OO inheritance, prototypal inheritance; behavior delegation

Behavior Delegation (design pattern)

OLOO:  Objects Linked to Other Objects

## Async Patterns

* Callbacks
* Generators / Coroutines
* Promises
