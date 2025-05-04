class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(this.username);
    }
}


// employee is inheriting user class. here  to access username from user we don't need to call explicitly instead we use super keyword to access username
class Employee extends User{
     constructor(email, designation){
        super(username)
        this.email = email;
        this.designation = designation;
     }

     employeeInfo(){
        console.log(`employee name is ${this.username} and designation is ${this.designation}`)
     }

}


const employee = new Employee("niki@gmail.com","FED", "Nikita Soni")

console.log(employee);