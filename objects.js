 
 /*
 *********************************** OBJECTS *************************************
In JavaScript, an object is an unordered collection of key - value pairs.Each key - value pair is called a property.

The key of a property can be a string.And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

JavaScript provides you with many ways to create an object.The most commonly used one is to use the object literal notation.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    'building number': 1234
};

console.log(person.firstName); //accessing property

to access building number you need array like notation
console.log(person['building number']); //array like notation

modify values in object 

    person.lastName = 'ibrahim';
    console.log(person);

add new property
    person.age = 25;
    console.log('new added value:', person.age);

deleting property
    delete person.age;

checking if property exist
    console.log('lastName' in person);

accessing all key and value using for in loop

  for (let key in person) {
        console.log(key + ":" + person[key]);
    }
console.log(person);

  ******************* object using new keyword *********************

    The regular {... } syntax allows us to create one object.But often we need to create many similar objects, like multiple users or menu items and so on.

  That can be done using constructor functions and the "new" operator.


new keyword
var myDetails = new myDetails();
myDetails.age = 25;
myDetails.firstName = 'aamir';
myDetails.lastName = 'ali';
myDetails.greet = function () {
    console.log("welllcome to js");
}
console.log(myDetails);
console.log(myDetails.greet);

  ************ constructor *********** *

    Constructor functions technically are regular functions.There are two conventions though:

  They are named with capital letter first.
  They should be executed only with "new" operator.

  Using constructor functions to create objects gives a great deal of flexibility.The constructor function may have parameters that define how to construct the object, and what to put in it.

  For instance:

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

  When a function is executed with new, it does the following steps:

  A new empty object is created and assigned to this.
  The function body executes.Usually it modifies this, adds new properties to it.
  The value of this is returned.


  add method in constructor

  Of course, we can add to this not only properties, but methods as well.

function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // My name is: John

  ****** objects methos ****** *
    an object property that include a function declaration is known as object method

  types of object method
1) Object.freez():

  changinfg the frozen object is impossible
  it prevent the addition and deletion of property
  also prevent changes

Object.freeze(john);

2) objet.seal():
  you can not add or remove property but you can modify property

Object.seal(john);

  A function which is associated with object called method
  When a function is a property of an object, it becomes a method.

  four ways to associate function to object
let person = {
    name: "John",
    age: 30,
}
person.sayHello = function () {
    console.log("Hi! My Name Is ");
}
person.sayHello();

  ************ 2 *****************
    let person = {
        name: "John",
        age: 30,
    };
function greet() {
    console.log("say hello");
}
person.sayHello = greet;
person.sayHello();

  ************* 3 *************
    let person = {
        name: "John",
        age: 30,
        sayHello: function () {
            console.log("hello11");
        }
    };
person.sayHello();

  ************* 4 ***************
    let person = {
        name: "John",
        age: 30,
        sayHello() {
            console.log("hello11");
        }
    };
person.sayHello();



------------------------------------------------------------------------------------------------
  ********** optional chaining **********
    Optional chaining is a feature of javascript that allow you to access the properties of an object and element of an array without having to check the array and object is null or undefine first it is represent by?.operator and used to cociesly access deeply nested property without having to write long chain of if else statement 

  the optional chaining?.stops the evaluation if the value before?.is undefined or null and returns undefined.

  **********example *********

let user = {}; // user has no address
alert(user?.address?.street); // undefined (no error)

The?.[] syntax also works, if we’d like to use brackets[] to access properties instead of dot..Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined

delete user?.name; 

 ************ object destructuring ***********************

    the destructurig assignment syntex is a javascript expression that make it possible to unpack from Array or property from object, into distinct variables.

let obj = {
    name: 'ali',
    age: 25,
    city: {
        country: 'USA',
        state: 'California'
    }
};

let { name, age, city } = obj;
console.log(`name is${name} and age is ${age} city is ${city.state}`);

  ************************* object properties***************************************************

    Object properties have a three special property called flags

1)writable => if true, then value can be change otherwise read only.
2) enumberable => if true, then listed in loops otherwise not listed.
3) configurable => if true, then property can be deleted and its value can be modified.

  When we create a property “the usual way”, all of them are true.But we also can change them anytime.

  The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

  The syntax is:=>

            let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

            obj => the object to get information from
            propertyName => the name of the property.

                example=>
            let prop1 = {
                name: "prop1",
                value: 20
            };

            let descriptor = Object.getOwnPropertyDescriptor(prop1, "name");
            console.log(JSON.stringify(descriptor, null, 2));

            output => {
                "value": "prop1",
                    "writable": true,
                        "enumerable": true,
                            "configurable": true
            }

  To change the flags, we can use Object.defineProperty.

  The syntax is:=>

            Object.defineProperty(obj, propertyName, descriptor)


  For instance, here a property name is created with all falsy flags:

            let user = {};

            Object.defineProperty(user, "name", {
                value: "John"
            });

            let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

            alert(JSON.stringify(descriptor, null, 2));

            {
                "value": "John",
                    "writable": false,
                        "enumerable": false,
                            "configurable": false
            }


 non - writable=>
            Let’s make user.name non - writable(can’t be reassigned) by changing writable flag:

            let user = {
                name: "John"
            };

            Object.defineProperty(user, "name", {
                writable: false
            });

            user.name = "Pete"; // Error: Cannot assign to read only property 'name'   

            non - enumbrable=>
            we can set enumerable: false.Then toString  won’t appear in a for..in loop, just like the built -in one:

            let user = {
                name: "John",
                toString() {
                    return this.name;
                }
            };

            Object.defineProperty(user, "toString", {
                enumerable: false
            });

            // Now our toString disappears:
            for (let key in user) alert(key); // name


    non - configurable=>
                The non - configurable flag(configurable: false) is sometimes preset for built -in objects and properties.
                A non - configurable property can’t be deleted, its attributes can’t be modified.
                For instance, Math.PI is non - writable, non - enumerable and non - configurable:


            let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
            alert(JSON.stringify(descriptor, null, 2));

            {
                "value": 3.141592653589793,
                    "writable": false,
                        "enumerable": false,
                            "configurable": false
            }
                

  Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.


                Object.defineProperties=>

            There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

  The syntax is:=>

            Object.defineProperties(obj, {
                prop1: descriptor1,
                prop2: descriptor2
                // ...
            });

  For instance:=>

            Object.defineProperties(user, {
                name: { value: "John", writable: false },
                surname: { value: "Smith", writable: false },
                // ...
            });

  */







