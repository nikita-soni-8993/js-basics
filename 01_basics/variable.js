const pi = 3.14; // value cannot be changed
let num= 123;  // let is scoped to a block 
var names = "nikita"   // var is not used in new JS. It had scope issues.

cityName = "jaipur";  // in JS even if you dont declare variable let or const it will default take it as let and its hoisted at top.

console.table([pi,num, names, cityName]);

function foo() {   
    for (var i = 0; i < 10; i++) 
    setTimeout(() => console.log(i), 1000); 
   } 
   foo();