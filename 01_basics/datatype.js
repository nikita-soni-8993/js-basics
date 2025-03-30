let num = 123;
//let name = "Nikita";
let city = "Chicago";
let isLoggedIn = true;

//console.log(`Hello  my name is ${name} and I live in ${city}`);

// javascript we have 2 types of Data types - primitive and non primitive
// primitive : String, number, boolean, nul (is a objet), undefined, symbol etc:  there are call by value means 

let names = "Gauravi";
let namenew = names;
nameNew = "Soni";

console.log(`my name is ${names} and my newname is ${nameNew}`);

//output: my name is Gauravi and my newname is Soni

// here if me change anything to nameNew it is not reflected in names variable as whenver primitve datis stored in anyvariable a copy is create and changes are made to it.

let email = {
    fName: "Nikit",
    lName: "soni",
    em : "niki.soni@gmail.com"
}

let details = email;
details.em = "nikita.soni8993@gmail.com";

console.log(`old datais ${email.em} and new data is ${details.em}`);

// output : old datais nikita.soni8993@gmail.com and new data is nikita.soni8993@gmail.com

// here in reference or non primitve datatype the change are made to both because here when we assign a object to another its reference is called.

// non primitive data types are: arrays, objects, functions