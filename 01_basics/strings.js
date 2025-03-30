const names = "Nikita";

//console.log(names);  // normal string assignment

// string if assigned as new String it show each character position also.  If you console log in browser it shows all the functions

const newString = new String("NikitaSoni");

//console.log(newString);

//console.log(newString.indexOf('n')); // output 8 . it shows position of letter n

//console.log(newString.replace('n', 'N'));

//console.log(newString.slice(6,10));

console.log(names.slice(1,6));  // start index and end index

// in slice if start index is greater than end index it returns empty string

//console.log(newString.substring(2,5))   // start index and end index

//console.log(newString.substring(5,2));  // in substring method if sI is greater than EI it will swap the arguments and return value

// slice deal with negative values also. 
// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

const str = "Mozilla";
//console.log(str.substring(-5,2));  // it starts counting from 0 if value is negative  output Mo

console.log(str.slice(-5,2));  // it will return empty as start is greater than end index

console.log(str.slice(-5,-2));  // it will start counting from backward output - zil





