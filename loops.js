/*
JavaScript Loops

The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.

There are four types of loops in JavaScript.

    for loop
    while loop
    do-while loop
    for-in loop


    1) JavaScript For loop

    The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

        for (initialization; condition; increment)  
        {  
            code to be executed  
        }  
        */

        for (var i = 0; i <= 10; i++) {
            document.write(i + "<br>");
          }
          
          /*   JavaScript while loop
          
          The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. The syntax of while loop is given below.
          
              while (condition)  
              {  
                  code to be executed  
              }   */
          
          var i = 1;
          while (i <= 15) {
            document.write(i + "<br>");
            i++;
          }
          
          /* JavaScript do while loop
          
           The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.
          
               do{  
                   code to be executed  
               }
            while (condition);  */
          
          var i = 50;
          do {
            document.write(i + "<br>");
            i++;
          }
          while (i <= 52)
          
          /* forEach loop 
          
          its apply on array whenever you have array you can use foreach loop
          for each loop by default not change your array but its change on copy of array so original array is same  */
          
          var sum = 0;
          var arr = [10, 18, 12, 20];
          
          arr.forEach(function myFunction(element) {
            sum = sum + element;
            console.log(sum);
          });
          
          
          