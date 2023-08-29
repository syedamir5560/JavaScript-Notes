/* ********************************execution context**********************************

(what is EC)=>
    When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

(types of EC)=>
There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

              Let’s start with the following example:

              let x = 10;

              function timesTen(a){
                  return a * 10;
              }

              let y = timesTen(x);

              console.log(y); // 100

  Each execution context has two phases: the creation phase and the      execution phase.

      ****The creation phase***

      When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

    1)Create the global object i.e., window in the web browser or global in Node.js.
    2)Create the this object and bind it to the global object.
    3)Setup a memory heap for storing variables and function references.
    4)Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

  **for above code it will do following task=>
                
 1)First, store the variables x and y and function declaration timesTen() in the global execution context.
 2)Second, initialize the variables x and y to undefined.

 2)The execution phase=>

During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.

For each function call, the JavaScript engine creates a new function execution context.

The function execution context is similar to the global execution context. But instead of creating the global object, the JavaScript engine creates the arguments object that is a reference to all the parameters of the function:

During the execution phase of the function execution context, the JavaScript engine assigns 10 to the parameter a and returns the result (100) to the global execution context:

To keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack,

******************Introduction to JavaScript Call Stack************

A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…

its work on LIFO principle

************************Stack overflow**********************

The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.
If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

For example, when you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error:

function fn() {
    fn();
}

fn(); // stack overflow

*****************************Variable Scope***************************************

Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:

   1) The global scope
   2) Local scope
   3) Block scope (started from ES6)

   1)The global scope

When the JavaScript engine executes a script, it creates a global execution context.

Also, it also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.

See the following example:

var message = 'Hi';


See the following example:

            var message = 'Hi';


2) Local scope

The variables that you declare inside a function are local to the function. They are called local variables. For example:

var message = 'Hi';

function say() {
    var message = 'Hello';
    console.log(message);
}

say();
console.log(message);

When the JavaScript engine executes the say() function, it creates a function execution context. The variable message declared inside the say() function is bound to the function execution context of the function, not the global execution context.
JavaScript Local Variables

3)Block scope

ES6 provides the let and const keywords that allow you to declare variables in block scope.

Generally, whenever you see curly brackets {}, it is a block. It can be the area within the if, else, switch conditions or for, do while, and while loops.

See the following example:

function say(message) {
    if(!message) {
        let greeting = 'Hello'; // block scope
        console.log(greeting);
    }
    // say it again ?
    console.log(greeting); // ReferenceError
}

say();
Code language: JavaScript (javascript)

In this example, we reference the variable greeting outside the if block that results in an error.

*/

