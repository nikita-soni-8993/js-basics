const score = 400.234;

console.log(score);

const num = new Number(400000);

console.log(num);

console.log(num.toLocaleString('en-IN'));  /// convert the number to readable format by default in USA else what you mention. it will commas 

console.log(score.toFixed(2));  // show 2 numbers after decimal or to whole number add decimal like 100 = 100.00 , used mostly in ecommerce websites

console.log(Math.max(3,77,89));  // output the largest number in set

console.log(Math.min(2,7,6));

console.log(Math.random());   //  output any number randomly between 0-1

console.log((Math.random()*10)+1); // output any number between 1-9

console.log(Math.floor((Math.random()*10)+1));  // added math.floor to above expression to remove so many number after decimal

console.log(Math.ceil(4.77));  // display higher number  5

console.log(Math.floor(4.77))  // lower number  4


//formula for random to set min and max limit

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max-min +1)));

