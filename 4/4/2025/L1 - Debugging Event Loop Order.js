
console.log("Begin"); //It's Sync scope code 

setTimeout(() => {
    console.log("Timeout Task");    //Async scope of code setTimeout
}, 0);

Promise.resolve()
.then(() => { 
    console.log("Promise Task"); 
});

console.log("End"); //It's Sync scope code

// //first All synch code's get executes
// //setTimeout() its first send to WebAPI, After its send's to callback queue and now comes Event Loop checks and sent to callback stack after its print the finall Output 
