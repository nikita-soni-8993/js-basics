// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("this is prmise");
//         return resolve("hi");
//     },1000);
// })


// // resolve is always linked with .then whatever we pass in resolve its received in then 
// promiseOne.then((response)=>{
//     console.log(response);
// });


// const promiseTwo = new Promise(function (resolve, reject){

//     setTimeout(()=>{
//         let error = true;
//         if(error){
//              resolve({username:'Nikita', email:'nikita@gmail.com'});
//         }else{
//             reject('Error: there is some error');
//         }
//     },1000);
   
// })

//  promiseTwo.then((response)=>{
//     console.log(response);
//     return response.username;   // here promise is in pending state and this username we will get in next then . this is called chaining or thenable
// }).then((username)=>{
//     console.log(username);   // here we get username
// }).catch((error)=>{
//     console.log(error);
// });


// const promisethree = new Promise(function (resolve, reject){

//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//              resolve({username:'Nikita', email:'nikita@gmail.com'});
//         }else{
//             reject('Error: there is some error');
//         }
//     },1000);
   
// })


//calling it with async await
// with async and await we have to use try and catch to handle errors gracefully
// async function getUsers(){
//     try{
//         const users = await promisethree;
//         console.log(users);
//     } 
//     catch(error){
//         console.log(error);
//     }
// }

// getUsers();


// async function getAllUsers(){
//     try{
//         const users = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await users.json();   // since the response is taking to convert it into json we have to add await
//         console.log(data);
//     } catch(error){
//          console.log(error);
//     }
    
// }


//getAllUsers();

// we can now make asyn calls without try catch and adding async await keyword by using fetch directly. Its also a promise but 
// syntax has been made much cleaner and easy. everything handled in background

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{ return response.json()})
.then((data)=>{ console.log(data)})
.catch((error)=>{ console.log(error)})





