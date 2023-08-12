/*
DATA TYPES

JavaScript has primitive data types and object types.

Following are the primitive data types:
- null
- undefined
- boolean
- number
- bigint
- string
- symbol

Following are object types:
- array
- function
- object

1) The Undefined Type

The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.
Consider the following example:

let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined

2) THE NULL DATATYPE
The null type is the second primitive data type that also has only one value null.
In JavaScript, null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object. A proposal to fix this was proposed but rejected. The reason was that the fix would break a lot of existing sites.
let obj = null;
console.log(typeof obj); // object

3) THE NUMBER TYPE
JavaScript uses the number type to represent both integer and floating-point numbers.
The following statement declares a variable and initializes its value with an integer:

let num = 100;

To represent a floating-point number, you include a decimal point followed by at least one number. For example:

let price = 12.5;
let discount = 0.05;
console.log(price + " " + discount);

4) NaN DATA TYPE
NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN:

console.log('a' / 2); // NaN;

The NaN has two special characteristics:
1 > Any operation with NaN returns NaN.
2 > The NaN does not equal any value, including itself.

Here are some examples:

console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

5) THE STRING TYPE
In JavaScript, a string is a sequence of zero or more characters. A string literal begins and ends with either a single quote(') or a double quote (").

JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

A string that begins with a double quote must end with a double quote. Likewise, a string that begins with a single quote must also end with a single quote:

let greeting = 'Hi';
let message = "Bye";

The template literals allow you to use the single quotes and double quotes inside a string without the need for escaping them. For example:

let mesage = \`"I'm good". She said"\`;
console.log(mesage);

5) The boolean type
The boolean type has two literal values: true and false in lowercase. The following example declares two variables that hold the boolean values.

let inProgress = true;
let completed = false;
let x = 5 > 4;
console.log(typeof completed); // boolean
console.log(x);

6) THE SYMBOL TYPE
JavaScript added a primitive type in ES6: the symbol. Different from other primitive types, the symbol type does not have a literal form.
To create a symbol, you call the Symbol function as follows:
let s1 = Symbol("s1");
console.log(s1);

Uses of symbol
Using symbols as unique values
Whenever you use a string or a number in your code, you should use symbols instead. For example, you have to manage the status in the task management application.
Before ES6, you would use strings such as open, in progress, completed, canceled, and on hold to represent different statuses of a task. In ES6, you can use symbols as follows:

let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
console.log(statuses);

7) JavaScript BigInt
ES2020 introduced a new built -in object called BigInt that allows you to represent whole numbers larger 253 - 1.

The bigint is the primitive type like number, string, symbol, boolean undefined, and null.

To make a BigInt, you append n to the end of the number literal, for example:

let bigInt = 9007199254740991n;

Alternatively, you can call the function BigInt():
let bigInt = BigInt(9007199254740991);

JAVASCRIPT OBJECT TYPE

There are three common object types used in JS:
1) Object
2) Function
3) Array

1) Object
In JavaScript, an object is an unordered collection of key - value pairs. Each key - value pair is called a property.

The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.

The following example creates an empty object using the object literal notation:

let empty = {};

To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

Accessing properties

To access a property of an object, you use one of two notations: the dot notation and array - like notation.
1) The dot notation

console.log(person.firstName);

2) Array - like notation([])

The following illustrates how to access the value of an object’s property via the array - like notation:

console.log(person['firstName']);

Introduction to JavaScript arrays

In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index:

A JavaScript array has the following characteristics:

First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, boolean, and null.
Second, the size of an array is dynamic and auto - growing. In other words, you don’t need to specify the array size up front.

Creating JavaScript arrays

JavaScript provides you with two ways to create an array. The first one is to use the Array constructor as follows:

let scores = new Array(10, 20);

The more preferred way to create an array is to use the array literal notation:

let arrayName = [element1, element2, element3, ...];

Accessing JavaScript array elements

JavaScript arrays are zero - based indexed. In other words, the first element of an array starts at index 0, the second element starts at index 1, and so on.

To access an element in an array, you specify an index in the square brackets:
arrayName[index]
for example:

primitive vs reference

stack and heap memory

When you declare variables, the JavaScript engine allocates memory for them in two memory locations: stack and heap.

Static data is the data whose size is fixed at compile time. Static data includes:

- Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
- Reference values that refer to objects.

Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and stores it on the stack.

For example, the following declares two variables and initializes their values to a literal string and a number:

let name = 'John';
let age = 25;

Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it allocates more space as needed.

The following example defines the name, age, and person variables:

let name = 'John';
let age = 25;

let person = {
    name: 'John',
    age: 25,
};
