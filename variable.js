/*
*********************************VARIABLES**************************************************

A variable is a label that references a value like a number or string.Before using a variable, you need to declare it. variables are used to store a data.

To declare a variable, you use the var keyword followed by the variable name as follows: */

var message;  //declaration
message = "variable";  //initialization
console.log("message");

/*JavaScript is a dynamically typed language.This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.
Starting in ES6, you can use the let keyword to declare a variable like this:*/

let message;
message = "Hello";

/*The main difference between `var` and `let` is that `var` is a ** global variable **, while `let` is a ** block - scoped variable **.This means that `var` can be accessed from anywhere in the code, while `let` can only be accessed within the block in which it is declared.*/


var x = 10; // This is a global variable

function myFunction() {
        let y = 20; // This is a block-scoped variable

        document.write(x); // This will print 10
        document.write(y); // This will also print 20
}

/* myFunction();
var is feature of es1 and let is feature of es6

var can be declare multiple times you have two var variable with same name but you cannot have two same let variable in your code*/

var x = 10;
var x = 200;

console.log(x); // This will print 200

let y = 10;
let y = 20; // This will throw an error
console.log(y);

/* in general, it is recommended to use `let` instead of `var` because `let` is more explicit and prevents some common errors.

        Constants

A constant holds a value that doesn’t change.To declare a constant, you use the const keyword.When defining a constant, you need to initialize it with a value.For example:

const workday = 5;
Code language: JavaScript(javascript)

Once defining a constant, you cannot change its value.

The following example attempts to change the value of the workday constant to 4 and causes an error:

workday = 2;

functions to intract with user 
                        1. alert() - show message.*/
alert(document.write);

/* 2.prompt() - show a message, input text.it return the text on ok or if cancel button or esc clicked, null */

var age = prompt('enter age');
if (age != nulll) {
        document.write(`age is ${age}`);
}
else {
        document.write('age was blanked');
}

/* 3.confirm() - show a message confirm with ok or cancel.it will return true on  ok or false on  cancel. */

let res = confirm('are you sure you want delete');

if (res) {
        document.write('deleted');
}
else {
        document.write('not deleted');
}









