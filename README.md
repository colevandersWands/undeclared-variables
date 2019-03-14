# Undeclared Variables

To understand the difference between _undeclared_ variables and _undefined_ variables, it's important be comfortable with the life-cycle of variables.  

__undeclared variables__: have never been explicitly initialized in your code with a _var_, _let_, or _const_.  attempting to use a variable that has not been declared makes it an undeclared variable.

__undefined variables__: undefined variables have been explicitly initialized using either _var_, _let_, or _const_, and store the __primitive type: undefined__. 

---

## Learning Objectives

in sloppy mode
* assigning a value to an undeclared variable will automatically declare that variable 
* variables declared by assignment have lexical scoping like "var", but are not hoisted (ie. can only be used after they have been assigned)
* attempting to read from an undeclared variable will throw an error

in strict mode
* anything involving an undeclared variable will throw an error

---

## Resources

* [variables & hoisting](https://github.com/janke-learning/variables-and-hoisting)
* study snippets
    * [declaration vs. assignment](https://goo.gl/14s6vU)  
    * [pytut - strict mode](https://goo.gl/3ERKsj) - pytut is always in strict mode
    * [replit - not strict](https://repl.it/@colevandersWands/undeclared-variables-not-strict)
    * [replit - strict mode](https://repl.it/@colevandersWands/undeclared-variables-strict)
    * [assigning to undeclared before using strict](https://repl.it/@colevandersWands/undeclared-before-strict)
* [strict mode](https://github.com/janke-learning/strict-mode)
* [mdn: undeclared_var error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var)
* [undeclared vs undefined](https://www.quora.com/What-are-undeclared-and-undefined-variables-in-JavaScript)
* [advanced but good stack-overflow](https://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables)
* [embedded examples](https://janke-learning.github.io/undeclared-variables)


___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
