// ********************recursion function******************

/*    A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

function recurse() {
    // ...
    recurse();
    // ...
}

A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

function recurse() {
if(condition) {
    // stop calling itself
    //...
} else {
    recurse();
}
}

for example:

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  alert( pow(2, 3) ); // 8

ex=>
  function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }
  console.log(sum(10));

  */

// -----------------------------------------------------------------------

// **********************REST AND SPREAD************************

/*
  REST parameter:=>
    function is called any number of arguments., no matter how it is defined.

    When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.


Like here:

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) ); //There will be no error because of
 “excessive” arguments. But of course in the result only the first two will be counted, so the result in the code above is 3.


The rest of the parameters can be included in the function definition by using three dots ...

 The dots literally mean “gather the remaining parameters into an array”.

 ex=>
        function sum(...args){
    let sum = 0;
    for(let arg of args){
        sum=sum+arg;
    }
    return sum;
}
console.log(sum(1,2,3));


rest parameter must be at the end

//Destructuring example 
   
      let x={
        name:'aamir',
        city:'akola',
        street:'num 8'
      }

      let {name , ...add}=x;
      console.log(name,add);

------------------------------------------------------------------------
***************SPREAD OP**********************************************

spread:=>unpack elemenet from []{}
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
Example=>
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.


//clone object (shallow clon)

  let order={
    id:1,
    date:'10/12/2015,
    name:'ali',
    address:['akola','maharashtra],
  };

  let clon={
    ...order,
  };

  console.log(clon);

  //merge two object

  let order={
    id:1,
    date:'10/12/2015,
    name:'ali',
    address:['akola','maharashtra],
  };

  let order2={
      "order name":"shoes",
      type:"wearing"
  };

  let book={
    ...order1,
    ...order2,
  }

  console.log(book);

use patterns:=>

  1>  Rest parameters are used to create functions that accept any number of arguments.
  2> The spread syntax is used to pass an array to functions that normally require a list of many arguments.
-------------------------------------------------------------------------
*********************CLOSURE**************************
before closure we should know about lexical envirnment


Lexical Environment:=>

When the JavaScript engine creates a new execution context for a function, it creates a new lexical environment to store variables defined in that function during the execution phase.

    A lexical Environment is a data structure that holds an identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to the actual object [including function type object] or primitive value).

The lexical environment contains two components:=>

  1)Environment record: It is the actual place where the variable and function declarations are stored.

  2)Reference to the outer environment: It means it has access to its outer (parent) lexical environment.

  example=>
  let phrase="hello";
  function fun(name){
    
    console.log(`name is : ${name} and phrase is : ${phrase} `);
    
  }
  fun("jhone");

  Here the inner Lexical Environment has a reference to the outer one.

When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.


******************************Closure*********************************
closure is a function that remember its outer variable and access them in java script all the function are naturally are closure

According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. For example:

                          function greeting() {
                              let message = 'Hi';

                              function sayHi() {
                                  console.log(message);
                              }

                              sayHi();
                          }

greeting();

Let’s modify the greeting() function:

                      function greeting() {
                          let message = 'Hi';

                          function sayHi() {
                              console.log(message);
                          }

                          return sayHi;
                      }
                      let hi = greeting();
                      hi(); // still can access the message variable

Now, instead of executing the sayHi() function inside the greeting() function, the greeting() function returns the sayHi() function object.

more closure example=>
                        1)using IIFE=>
                              for(var i=1;i<=3;i++){
                        (function(i){
                          setTimeout(function(){
                            console.log(`index is ${i} sec is ${i}`);
                          } , i*1000);
                        })(i);
                      }

2)let keyword:=>

                  for(let i=1;i<=3;i++){
                  
                    setTimeout(function(){
                      console.log(`index is ${i} sec is ${i}`);
                    } , i*1000);
                  
                }


**********************Settime out and settimeinterval******************
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

    1)setTimeout allows us to run a function once after the interval of time.
    2)setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

Syntex=>
    let Timerid=setTimeout(func | code , [delay] , [arg1] , [arg2]...)


1)func | code=>
            function or string of code to be executed.
2)delay=>
            delay before run in milisecond
3)arg1, arg2…
            Arguments for the function

example 1>
                          
                    function fun(){  //without argument
                      console.log("hello");
                    }
                    setTimeout(fun,1000);   

example2>
                      function add(a,b){      //with argument
                        console.log(`adding is ${a+b}`);
                      }
                      setTimeout(add,1000,10,10);

clear time out=>

                              function add(a,b){
                                console.log(`adding is ${a+b}`);
                              }

                              let timer=setTimeout(add , 1000, 10 , 20);
                              clearTimeout(timer);

*/

/***************************Call , apply and bind************************** *

CALL()=>
          The JavaScript call() Method

          The call() method is a predefined JavaScript method.

          It can be used to invoke (call) a method with an owner object as an argument (parameter).

          With call(), an object can use a method belonging to another object.

example=>

                      const person={
                        name : "aamir",
                        print:function(){
                        console .log(this.firstname+" "+this.lastname);
                        }
                      }

                      let person2={
                        firstname:"aamir",
                        lastname: "Ali"
                      }

                    let person3={
                        firstname:"aatif",
                        lastname :"Rahmani"

                      }

                      person.print.call(person2);

example 2=>With argument

                    let person = {
                        print:function(city , country){
                            console.log(this.firstname+" "+this.lastname+","+city+" ,"+country);
                        }
                    }

                    let person2={
                        firstname:"John",
                        lastname : "Doe"
                    }
                    let person3={

                        firstname:"Alia",
                        lastname : "bhutt"
                    }

                    person.print.call(person3 , "mumbail" , "india");

 APPLY()=>
 
                    The Difference Between call() and apply()

                    The difference is:

                    The call() method takes arguments separately.

                    The apply() method takes arguments as an array.

Example=>
                                const person = {
                fullName: function (city, country) {
                    return this.firstName + " " + this.lastName + "," + city + "," + country;
                }
            }

            const person1 = {
                firstName: "John",
                lastName: "Doe"
            }

            person.fullName.apply(person1, ["Oslo", "Norway"]);


      BIND()=>
      bind() returns a new copy of the original function with all its properties intact but bound to   
      With the bind() method, an object can borrow a method from another object.

                 const person = {
                      firstName:"John",
                      lastName: "Doe",
                      fullName: function () {
                        return this.firstName + " " + this.lastName;
                      }
                    }

                    const member = {
                      firstName:"Hege",
                      lastName: "Nilsen",
                    }

                    let fullName = person.fullName.bind(member);

  some times bind method also used to preventing this
  */















