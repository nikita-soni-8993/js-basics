let heros = ["spiderman", "batman", "ironman"];

let more_heros = ["thor"];

let all_heros = heros.concat(more_heros);

//console.log(all_heros);

let my_heros = [...heros,...more_heros];

//console.log(my_heros);   /// another way to concat arrays

let arr = [10,11,12,13,14,15];

//console.log(arr.slice(1,4));  // we are accessing a part of array from index 1-3 but not modifying original arry

//console.log(arr.splice(1,4));   //we are moidfying part of array - removing elements from index 1-4 and modifying original array
//console.log(arr);

let str = "Nikita";

console.log(Array.from(str)); // return an array [ 'N', 'i', 'k', 'i', 't', 'a' ]

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

console.log(Array.from([1,2,3], (x) =>  x+x));   // we can get new array from this


 //read from here in details  : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from