const date = new Date();

console.log(date);

console.log(date.toDateString());  // Sun Mar 30 2025

console.log(date.toLocaleDateString());  // 3/30/2025

const newDtate = Date.now();

console.log(newDtate);  // 1743347419299  get time in millisecnds used during auction, booking websites 

console.log(date.getTime());


console.log(new Date(2025,2,25).getMonth());

let datedetails = new Date();
console.log(datedetails.toLocaleDateString('default',
    {weekday: 'long'}));



