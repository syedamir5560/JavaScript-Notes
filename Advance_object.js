/*
Set | Map | WeakSet | WeakMap
*************MAP********** 

 Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.

let map = new Map();
map.set("name", "John");//add key value
map.set(1, "ali");
map.delete(1);//delete elemenet by key
console.log(map);   //
console.log(map.size);  //return size of map


********************iteration over map************************

 For looping over a map, there are 3 methods:

 map.keys() – returns an iterable for keys,
 map.values() – returns an iterable for values,
 map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of. 

 For instance:

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

 iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

 iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

 iterate    over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}


 *********************************SET****************************

  A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

 visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

 set keeps only unique values
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (then Pete and Mary)
}


********************iteration over set******************
let set1 = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

 the same with forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

 ****************************** WEAKMAP *******************************

 The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

can't use a string as the key
weakMap.set("test", "Whoops");

WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)  

*************************** WEAKSET *******************************************
    WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet(not primitives).

An object exists in the set while it is reachable from somewhere else.

Like Set, it supports add, has and delete, but not size, keys() and no iterations.

    For instance, we can add users to WeakSet to keep track of those who visited our site:

let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

 visitedSet has 2 users now

 check if John visited ?
    alert(visitedSet.has(john)); // true

check if Mary visited ?
    alert(visitedSet.has(mary)); // false

john = null;   


 ----------------------------------------------------------------------
********************************************Date Object********************************

To create a new Date object call new Date() with one of the following arguments:

new Date()

ex=>
      let x= new Date();
      console.log("Current date:",x);// Current date

****there are methods to access day,month and year from the date

getFullYear()
    Get the year (4 digits)
          let x=new Date();
          console.log(x.getDay());

getMonth()
    Get the month, from 0 to 11.
getDate()
    Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
    Get the corresponding time components.



--------------------------------------------------------------------
**************************************JSON OBJECT******************************


JSON is java script object notation
JSON is text formating for storing and transporing data
JSON is language independant 

=>This example is a JSON string:
'{"name":"John", "age":30, "car":null}'

JSON Values

=>In JSON, values must be one of the following data types:

a string
a number
an object
an array
a boolean
null

JavaScript provides methods:

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.


=> Example - Parsing JSON

Imagine we received this text from a web server:
'{"name":"John", "age":30, "city":"New York"}'

Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

=>JSON.parse()=> mathod in js

When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.

use JSON.parse method to convert string into obj

let x='{"name":"John", "age":30, "city":"New York"}';
let y=JSON.parse(x);
console.log(y);

=> convert date 
let x='{"name":"John", "date":"2012-5-14", "city":"New York"}';
let y=JSON.parse(x );
y.date=new Date(y.date)
console.log(y);

Or, you can use the second parameter, of the JSON.parse() function, called reviver.
    let x='{"name":"John", "date":"2012-12-14", "city":"New York"}';

let y=JSON.parse(x, function(key,value){
        if(key=="date"){
            return new Date(value);
        }
        else{
            return value;
        }
});
console.log(y);

=>JSON.stringify method=>

When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

console.log(myJSON);

=>Stringify Dates

In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.

Example=>

const obj = {name: "John", today: new Date(), city : "New York"};
const myJSON = JSON.stringify(obj);

=> we can conver function to string =>

const obj = {name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);

*/



