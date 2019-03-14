undeclared variables are not avaiable before their first assignment (like let & const), 
but then are not bound to block scope (like var).

strict mode does not allow this behavior
and it's bad practice anyway

can't read from them before assignment/declaration anyway


on-page snippets for console pasting
---

// undeclared variables are like var, not bound by blocks
{
  undeclared = "yips";
};
console.log(undeclared);

---


console.log('- declared var -');
console.log(declared);
declared = "firstly";
console.log(declared);
var declared;

console.log('\n- undeclared var -');
// console.log(undeclared);
undeclared = "secondly";
console.log(undeclared);


---

// be sure to refresh the browser after running this one, there's no way to undo strict mode
"use strict";

console.log('- declared var -');
console.log(declared);
declared = "firstly";
console.log(declared);
var declared;

console.log('\n- undeclared var -');
// console.log(undeclared);
undeclared = "secondly";
console.log(undeclared);

---

// using strict doesn't undo, since "undeclared" variables become declared by assignment
undeclared = 'before using strict';
"use strict";
console.log(undeclared);


# Undeclared Variables



---

## Resources

* [mdn: undeclared_var error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var)
* undeclared variable study snippets
    * [pytut - strict mode](https://goo.gl/3ERKsj) - pytut is always in strict mode
    * [replit - not strict](https://repl.it/@colevandersWands/undeclared-variables-not-strict)
    * [replit - strict mode](https://repl.it/@colevandersWands/undeclared-variables-strict)
* [strict mode](https://github.com/janke-learning/strict-mode)
* [advanced but good](https://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables)

undefined vs undeclared
  https://techbrij.com/javascript-null-undefined-undeclared
  uses functions: https://lucybain.com/blog/2014/null-undefined-undeclared/
  https://www.educba.com/undefined-vs-null/
    goood
    no undeclared
  https://medium.com/technoetics/difference-between-null-undefined-and-not-defined-in-javascript-3a52a62894b





___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
