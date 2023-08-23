/******************************THIS KEYWORD*********************************

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
1)In an object method, this refers to the object.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }; //this reffer to person object
  
2)Alone, this refers to the global object.
3)In a function, this refers to the global object.

function myFunction() {
    return this;
  }  //global obj window

4)In a function, in strict mode, this is undefined.
5)In an event, this refers to the element that received the event.
6)Methods like call(), apply(), and bind() can refer this to any object.
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
Return "John Doe":
  person1.fullName.call(person2);

******************************function borrowing******************************

With the bind() method, an object can borrow a method from another object.
This example creates 2 objects (person and member).
The member object borrows the fullname method from the person object:
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
----------------------------------------------------------------------------------------

********************In four ways  this key word behave diffrently *************************

Function context=>

In JavaScript, you can call a function in the following ways:
   1) Function invocation
   2) Method invocation
   3) Constructor invocation
   4) Indirect invocation
Each function invocation defines its own context. Therefore, the this behaves differently

1)*******************Simple function invocation********************

In the non-strict mode, the this references the global object when the function is called as follows:

function show() {
   console.log(this === window); // true
}
show();
When you call the show() function, the this references the global object, which is the window on the web browser and global on Node.js.


2) **************************Method invocation**************************

When you call a method of an object, JavaScript sets this to the object that owns the method. See the following car object:

let car = {
    brand: 'Honda',  
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda

In this example, the this object in the getBrand() method references the car object.

Since a method is a property of an object which is a value, you can store it in a variable.

let brand = car.getBrand;

And then call the method via the variable

console.log(brand()); // undefined

You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.

To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value.

let brand = car.getBrand.bind(car);
console.log(brand()); // Honda

3)**************************** Constructor invocation*************************   

When you use the new keyword to create an instance of a function object, you use the function as a constructor.
The following example declares a Car function, then invokes it as a constructor:

function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car = new Car('Honda'); //this is constructor invocation
console.log(car.getBrand()); //honda

The expression new Car('Honda') is a constructor invocation of the Car function.

4)******************************** Indirect Invocation*******************************

In JavaScript, functions are first-class citizens. In other words, functions are objects, which are instances of the Function type.

The Function type has two methods: call() and apply() . These methods allow you to set the this value when calling a function. For example:

The call() and apply() methods are predefined JavaScript methods.
They can both be used to call an object method with another object as argument.

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  let x = person1.fullName.call(person2); 



 */