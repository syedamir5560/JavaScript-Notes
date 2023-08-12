# JavaScript Notes

## Variables

A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

To declare a variable, you use the `var` keyword followed by the variable name as follows:

```javascript
var message;  // declaration
message = "variable";  // initialization
console.log(message);

JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.
Starting in ES6, you can use the let keyword to declare a variable like this:
let message = "Hello";

The main difference between var and let is that var is a global variable, while let is a block-scoped variable. This means that var can be accessed from anywhere in the code, while let can only be accessed within the block in which it is declared.
var x = 10; // This is a global variable

function myFunction() {
  let y = 20; // This is a block-scoped variable

  document.write(x); // This will print 10
  document.write(y); // This will also print 20
}

myFunction();

Constants

A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value. For example:
const workday = 5;
Once defining a constant, you cannot change its value.

The following example attempts to change the value of the workday constant to 4 and causes an error:
workday = 2;
Sure, here is the provided JavaScript code converted into raw Markdown format for a GitHub readme file:

markdown

# JavaScript Notes

## Variables

A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

To declare a variable, you use the `var` keyword followed by the variable name as follows:

```javascript
var message;  // declaration
message = "variable";  // initialization
console.log(message);

JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.

Starting in ES6, you can use the let keyword to declare a variable like this:

javascript

let message = "Hello";

The main difference between var and let is that var is a global variable, while let is a block-scoped variable. This means that var can be accessed from anywhere in the code, while let can only be accessed within the block in which it is declared.

javascript

var x = 10; // This is a global variable

function myFunction() {
  let y = 20; // This is a block-scoped variable

  document.write(x); // This will print 10
  document.write(y); // This will also print 20
}

myFunction();

Constants

A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value. For example:

javascript

const workday = 5;

Once defining a constant, you cannot change its value.

The following example attempts to change the value of the workday constant to 4 and causes an error:

javascript

workday = 2;

User Interaction Functions

    alert() - show a message.
            alert(document.write);
prompt() - show a message, input text. It returns the text on OK or if the cancel button or Esc is clicked, null.

        var age = prompt('enter age');
if (age != null) {
    document.write(`age is ${age}`);
} else {
    document.write('age was blanked');
}

confirm() - show a message confirm with OK or Cancel. It will return true on OK or false on Cancel.
        let res = confirm('are you sure you want to delete');

if (res) {
    document.write('deleted');
} else {
    document.write('not deleted');
}
