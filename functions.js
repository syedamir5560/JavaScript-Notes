/*
JavaScript Functions =>

    JavaScript functions are used to perform operations.We can call JavaScript function many times to reuse the code.
Advantage of JavaScript function

    There are mainly two advantages of JavaScript functions.=>

    Code reusability: We can call a function several times so it save coding.
    Less coding: It makes our program compact.We don’t need to write many lines of code each time to perform a common task.

The syntax of declaring function is given below.=>

function functionName([arg1, arg2, ...argN]) {
    //code to be executed  
}

function msg() {
    alert("hello! this is message");
}
msg();

Calling a function=>

To use a function, you need to call it.Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:

functionName(arguments);

function say(me) {
    console.log(me);
}
say('Hello');

When declaring a function, you specify the parameters.However, when calling a function, you pass the arguments that are corresponding to the parameters.
For example, in the say() function, the message is the parameter and the 'Hello' string is an argument that corresponds to the message parameter.


*********return statement in a function********** /

return statemet in javascript used to specify the value that a function should return when function is called
A function can return a value back into the calling code as the result.

function addition(a, b) {
    return a + b;
}

let sum = addition(10, 20);
alert('Sum:', sum);

multiple return statements

function compare(a, b) {
    if (a > b) {
        return 1;
    }
    else {
        return -1;
    }
}

var c = compare(10, 5);
console.log("comparson is=   " + c);

********** argument keyword ************ /

arument keyword refer to an object that contain all the argument passed to a function 
function fun() {
    console.log(arguments);
}
fun(1, 2, 3);

Function hoisting =>

    In JavaScript, you can use a function before declaring it.For example:

showMe(); // a hoisting example  

function showMe() {
    console.log('an hoisting example');
}


The arguments object =>

    Inside a function, you can access an object called arguments that represents the named arguments of the function.

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2));

****** ANNONAMOUS FUNCTION ******=>

    An anonymous function is a function without a name.The following shows how to define an anonymous function:

    An anonymous function is not accessible after its initial creation.Therefore, you often need to assign it to a variable.

let show = function () {
    console.log("hello aoamous");
};
show();

Using anonymous functions as arguments=>

In practice, you often pass anonymous functions as arguments to other functions.For example:

setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

***** Immediately invoked function execution****=>

    If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

(function () {
    console.log('IIFE');
})();

***** Arrow functions *******=>

    ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions:
        There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
            It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
In other words, it’s the shorter version of:

let func = function (arg1, arg2, ..., argN) {
    return expression;
};

For example, this function:=>

let show = function () {
    console.log('Anonymous function');
};

can be shortened using the following arrow function:=>

let show = () =>
    console.log('Anonymous function');


******** function expression *+******* /=>
There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

For example:

let sayHi = function () {
    alert("Hello");
};
console.log(sayHi());
Function Declaration: a function, declared as a separate statement, in the main code flow:
Function Expression: a function, created inside an expression or inside another syntax construct.Here, the function is created on the right side of the “assignment expression” =:

*/


