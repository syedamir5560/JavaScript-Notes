/*
=>Introduction to the JavaScript Arithmetic Operators

JavaScript supports the following standard arithmetic operators:

| Operator       | Sign         |
|----------------|--------------|
| Addition       | +            |
| Subtraction    | -            |
| Multiplication | *            |
| Division       | /            |


        An arithmetic operator accepts numerical values as operands and returns a single numerical value.The numerical values can be literals or variables.

        let sum = 10 + 10;
        console.log(sum); // 30

        if one value is string its convert numbric value into string.
        let sum1 = '10' + 10;
        console.log(sum); //1020

SUBTRACTION OPERATORS(-)=>

        The subtraction operator(-) subtracts one number from another.For example:

        let result = 30 - 10;
        console.log(result); // 20


        If a value is a string, a boolean, null, or undefined, the JavaScript engine will:

        First, convert the value to a number using the Number() function.
        Second, perform the subtraction.
        let sub = '30' - 30;
        console.log('sub', sub);//0

Multiplication operator(*)=>

            JavaScript uses the asterisk(*) to represent the multiplication operator.The multiplication operator multiplies two numbers and returns a single value.For example:

            let mul = 2 * 3;
            console.log(mul); //if fisrt value is string js engine convert it into number and perform operation

            Divide operator(/)=>

            Javascript uses the slash(/) character to represent the divide operator. The divide operator divides the first value by the second one. For example:

            let div = 20 / 10;

            console.log(div); // 2 if fisrt value is string js engine convert it into number and perform 

Introduction to the JavaScript remainder operator(%)=>

            JavaScript uses the % to represent the remainder operator.The remainder operator returns the remainder left over when one value is divided by another value.

            let remainder = 5 % -2;
            console.log(remainder); // 1

Introduction to JavaScript assignment operators=>

 An assignment operator(=) assigns a value to a variable.The syntax of the assignment operator is as follows:

| Operator | Meaning                 |Description                                                |
|----------|-------------------------------------------------------------------------------------|
| a = b    | a = b                   | Assigns the value of b to a.                              |
| a += b   | a = a + b               | Assigns the result of a plus b to a.                      |
| a -= b   | a = a - b               | Assigns the result of a minus b to a.                     |
| a *= b   | a = a * b               | Assigns the result of a times b to a.                     |
| a /= b   | a = a / b               | Assigns the result of a divided by b to a.                |
| a %= b   | a = a % b               | Assigns the result of a modulo b to a.                    |
| a &= b   | a = a & b               | Assigns the result of a AND b to a.                       |
| a |= b   | a = a | b               | Assigns the result of a OR b to a.                        |
| a ^= b   | a = a ^ b               | Assigns the result of a XOR b to a.                       |
| a <<= b  | a = a << b              | Assigns the result of a shifted left by b to a.           |
| a >>= b  | a = a >> b              | Assigns the result of a shifted right by b (signpreserved) to a. |
| a >>>= b | a = a >>> b             | Assigns the result of a shifted right by b to a.          |

Introduction to the JavaScript unary operators=>

Unary operators work on one value.The following table shows the unary operators and their meanings:

| Unary Operators | Name                      | Meaning                                  |
|-----------------|---------------------------|------------------------------------------|
| + x             | Unary Plus                | Convert a value into a number            |
| - x             | Unary Minus               | Convert a value into a number and negate it |
| ++x             | Increment Operator (Prefix) | Add one to the value                   |
| --x             | Decrement Operator (Prefix) | Subtract one from the value            |
| x++             | Increment Operator (Postfix) | Add one to the value                   |
| x--             | Decrement Operator (Postfix) | Subtract one from the value            |

The table format makes it clear and organized for understanding the various unary operators and their meanings.


let x = 10;
let y = ++x;
console.log(x);
console.log(y); // 10

Introduction to JavaScript comparison operators=>

To compare two values, you use a comparison operator.The following table shows the comparison operators in JavaScript:

| Operator | Meaning                |
|----------|------------------------|
| <        | Less than              |
| >        | Greater than           |
| <=       | Less than or equal to  |
| >=       | Greater than or equal to |
| ==       | Equal to               |
| !=       | Not equal to           |


        JavaScript provides three logical operators:

             !(Logical NOT)
            || (Logical OR)
            && (Logical AND)

1) The Logical NOT operator(!)=>

            JavaScript uses an exclamation point! to represent the logical NOT operator.The! operator can be applied to a single value of any type, not just a Boolean value.

            When you apply the! operator to a boolean value, the! returns true if the value is false and vice versa.For example:

            let eligible = false,
                required = true;

            console.log(!eligible); //true
            console.log(!required);//false

2) The Logical AND operator(&&)=>

            JavaScript uses the double ampersand(&&) to represent the logical AND operator.The following expression uses the && operator:

            The result of the && operator is true only if both values are true, otherwise, it is false.For example:

            let eligible = false,
                required = true;

            console.log(eligible && required); // false

3) The Logical OR operator(||)=>

                JavaScript uses the double pipe || to represent the logical OR operator.You can apply the || operator to two values of any type:

                let result = a || b;
                The || operator returns false if both values evaluate to false.

                priorities is! >>&&&>>||

nullish coalescing operator=>

                ES2020 introduced the nullish coalescing operator denoted by the double question marks(??).The nullish coalescing operator is a logical operator that accepts two values:

                value1 ?? value2

                The nullish coalescing operator returns the second value(value2) if the first value(value2) is null or undefined.

                const age = null ?? 28;
                console.log(age);//28

exponentiation operator=>

                ECMAScript 2016 provided an alternative way to get a base to the exponent power by using the exponentiation operator( **) with the following syntax:

                x ** n

                let resul = 2 ** 2;
                console.log(resul); //4    
*/
