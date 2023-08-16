/*
THE STRING=>
        In JavaScript, a string is a sequence of zero or more characters.A string literal begins and ends with either a single quote(') or a double quote (").

        JavaScript strings are primitive values.Also, strings are immutable.It means that if you modify a string, you will always get a new string.The original string doesn’t change.

        A string that begins with a double quote must end with a double quote.Likewise, a string that begins with a single quote must also end with a single quote:

let greeting = 'Hi';
let message = "Bye";

        The template literals allow you to use the single quotes and double quotes inside a string without the need of escaping them.For example:

            let mesage = `"I'm good". She said"`;
            console.log(mesage);

         //to find length of string
            let str = 'aamir';
            console.log(str.length);

        //to fetch perticular charecter from string
            console.log(str[2]);

        //to use double qoute in string
            let str1 = "aamir ali \"cse\"\ ";
            console.log(str1);

        //to add two string concate() function used
            let str3 = str.concat(str1);
            console.log(str3);

        //getting sub string from string 
            let substr = str1.substr(2, 4);
            let substr2 = str1.substring(2, 4);
            console.log(substr);
            console.log(substr2);

        //to find index of perticular su string in string we use indexof fuction
            let str4 = " this is javascript tutorial";
            let pos = str4.indexOf('is');
            console.log(pos);

        //removing white spaces trim() /trimStart()/trimEnd() function used
            console.log(str4);
            console.log(str4.trim());

        //convert into upper case use toUpperCase()
            console.log(str4.toUpperCase());

        //to replace string replace()
            console.log(str4.replace('this', 'that'));

*/



