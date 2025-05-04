class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
        encryptPassword(){
            return `${this.password}abc`
        }

        changeUsername(){
            return `${this.username.toUpperCase()}`
        }
    
}

const userOne = new User("nikita","nikita@gmail.com","chicago@123");

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());


// behind the scene

function UserTwo(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

UserTwo.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

UserTwo.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const userTwo = new UserTwo("Archit","archee@gmail.com","chicago_123");

console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())