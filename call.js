function user(firstname, lastname){
    this.username = firstname+lastname;
    return this.username;
}

function  company(fisrtname, lastname, designation, email){
    this.designation = designation;
    this.email = email;
     user.call(this,fisrtname, lastname);

}

const newUSer = new company("nikita", "soni", "FED", "user@gmail.com");

//console.log(newUSer);

// output : company {
//   designation: 'FED',
//   email: 'user@gmail.com',
//   username: 'nikitasoni'
// }


// to get the username from user function we have to call user function with .call and also first paramter has to be this
// we are sending out this to append to comapny function


//this is object literal - a single object
const anyobject = {
    name: "nikita",
    age: "35",
     greeting: function(){
        console.log(`my name is ${this.name}`)
     }
}


// to create multipple instances of object we can create a construction function or class and then using new keyword we can create instances 

function User(username, email, city){
    this.username = username;
    this.email = email;
    this.city = city;

    this.greeting = function (){
        console.log(`my name is ${this.username}`);
        
    }
    return this;
}

const userOne = new User("nikita", "nikita@gmail.com", "chicago");
const userTwo = new User("Archit", "archit@gmail.com","chicago");


console.log(userOne instanceof User);  // true
console.log(this);
console.log(userOne);
console.log(userTwo);

//  this keyword:  this mean jisne call kiya hai:  means it create a context .
// if we console this in brower it gives all windows object.
// if we console this globally  in file it will give empty object in reference to node
// if we co sole this in a function like USer it will give all property associated with this like name, email etc


// with New keyword:
// first : a new object copy is created
// second:  a constructor function is called and all pramaters are allocated
// third : this is associated with pramas
