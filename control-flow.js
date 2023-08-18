/*

What is a condition in code?
Conditions are statements that are created by the programmer which evaluates actions in the program and evaluates if it's true or false.

JavaScript If-else

The JavaScript if-else statement is used to execute the code whether condition is true or false. There are three forms of if statement in JavaScript.

    1)If Statement
    2)If else statement
    3)if else if statement

1)if statement

It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.

    if(expression){  
    //content to be evaluated  
    }  

let age1 = 18;
if (age1 >= 18) {
    console.log('You can sign up');
}

JavaScript If...else Statement=>

It evaluates the content whether condition is true of false. The syntax of JavaScript if-else statement is given below.

    if(expression){  
    //content to be evaluated if condition is true  
    }  
    else{  
    //content to be evaluated if condition is false  
    }   

var a = 20;
if (a % 2 == 0) {
    document.write("a is even number");
}
else {
    document.write("a is odd number");
}

JavaScript If...else if statement

It evaluates the content only if expression is true from several expressions. The signature of JavaScript if else if statement is given below.

if(expression1){  
    //content to be evaluated if expression1 is true  
    }  
    else if(expression2){  
    //content to be evaluated if expression2 is true  
    }  
    else if(expression3){  
    //content to be evaluated if expression3 is true  
    }  
    else{  
    //content to be evaluated if no expression is true  
    }  

var b = 40;
if (b > 40) {
    document.write("b is greayer than 30");
}
else if (b < 40) {
    document.write("b is less than 40");
}

else if (b == 40) {
    document.write("b is equal to 40");
}

Introduction to the JavaScript switch case statement

The switch statement evaluates an expression, compares its result with case values, and executes the statement associated with the matching case value.

var grade = "A";
var res;

switch (grade) {
    case 'A':
        res = "grade A";
        break;

    case 'B':
        res = "grade B";
        break;

    case 'c':
        res = "grade c";
        break;


    default:
        res = 'null';
        break;
}

document.write(res);


*/
