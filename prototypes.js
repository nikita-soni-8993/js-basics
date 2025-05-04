const name = "Nikita Soni    ";
const name2 = "ArchitSoni     ";


// inject a prototype in string to return the original length of the string without spaces
//  injected prototype at string : any string can use it
String.prototype.trueLength = function(){
    return this.trim().length;
}

//console.log(name2.trueLength());


// javascript is a prototype based language. Classes are syntatic sugar on it just to make it convinient for users 
// and to make it look like other OOP languages.
// In JS everything is an object.
// In JS, functions,arrays, numbers, strings etc are all objects.

function User(name,age){
    this.name = name;
    this.age = age;
}

User.prototype.information = function(){
    return this.name+" Soni"
}

const user1 = new User("Nikita", "35");
const user2 = new User("Archit", "34");


console.log(user1.information())
const myArray = [1,2,3,4,5];


//injected a prototype at Object level - any array, function, string can use this
Object.prototype.authority = function (){
    console.log("it can be accessed by all functions, array and string anything");
}


//myArray.authority();
//user1.authority();


// inheritance:

const Principle = {
    authority: "All"
}

const Teacher = {
    profession : "teaching"
}


//inherit teacher in principle
Object.setPrototypeOf(Principle,Teacher);

//console.log(Principle.profession)





