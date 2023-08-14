/****************************************ARRAY*****************************************************
    array in javascript is a datastructure tha store an orderd list of element . it can hold element of any data types  including Number,string and obj even other arrays 


                  let Arr1=['history','hindi','marathi','physics'];
                  console.log(Arr1[2]);       

                  to access whole array=>
                  console.log(Arr1);

                  OPERATIO ON ARRAY=>
                  add element on last of array
                  Arr1.push("push");

                  add element on first of array=>
                  Arr1.unshift("unshift");

                  remove element from end=>
                  Arr1.pop();

                  remove element from beginning=>
                  Arr1.shift();

                  remove from specific position=>
                  Arr1.splice(2,1);

                  find position of specific element=>
                  let pos=Arr1.indexOf("hindi");

                  split array from specific position=>
                      let sp=Arr1.split('i');

                  join something in between of allay element=>
                  let joint=Arr1.join('-');

                  join two array=>

                  let arr2=[1,2,3,4,5];
                  let arr3=['java','cpp','physics'];
                  let con=arr2.concat(arr3);
                  console.log(con);

                  multi dimentional array=>

                    let multi=[
                      ['eng','hindi','marathi'],
                      ['phisics','chemestri','math'],
                      ['bio', 'zulo']
                  ];

                  let acc=multi[1][0];
                  console.log(acc);

                  access array by for loop=>

                  let forl=[
                      ['eng','hindi','marathi'],
                      ['phisics','chemestri','math'],
                      ['bio', 'zulo']
                  ];

                  for(let i=0 ; i<forl.length ; i++){
                      console.log(`elemet ${i} is ${forl[i]} \n `);
                  }

                  forl.forEach(function myFunction(element) {  
                    console.log(element);  
                  });  
                  */

/**********************************ARRAY METHODS ***************************************
 
Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function.

Map=>

The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

Syntex=>
          var new_array = arr.map(function callback(element, index, array) {
            // Return value for new_array
        }[, thisArg])

        function(currentValue, index, arr): It is a required parameter and it runs on each element of the array. It contains three parameters which are listed below:

        1)currentValue: It is a required parameter and it holds the value of the current element.
        2)index: It is an optional parameter and it holds the index of the current element.
        3)arr: It is an optional parameter and it holds the array.

Example=>
                    let Arr=[1,2,3,4,5,6,7,8,9];
                    let arr= Arr.map(function(x,index){
                        return {key:index,value:x*x};
                      })

                      console.log(arr);

filter=>
        The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. 

Syntex=>
                        let comp=[20,30,40,50,60,2,8,4,1,3,5];

                        let even=comp.filter(function(item){
                        if(!(item % 2 ==0) ){
                          return item;
                          }
                          });
                          console.log(even);

reduce=>
        The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
       
      Syntax:=>
                      arr.reduce(callback[, initialValue])

                          const numbers = [1, 2, 3, 4];
                          const sum = numbers.reduce(function (result, item) {
                            return result + item;
                          }, 0);
                          console.log(sum); // 10

                          */