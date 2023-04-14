/*
Why do we care baout asynchronous code?
Because JS is a single-threaded and if we don't do async programming it will block the thread

//SOLUTION:
Fetch over a network
Heavy calculation
reading / writing files
hashing / comparing to files
Cryptographic functions
Databases

SOLUTION 1 : Callbacks
Con: callback hell, pyramid of doom 

SOLUTION 2: Promises

Two states:
- Pending
- Fulfilled
    - rejected
    - resolved

SOUTION 3: Promises
*/


new Promise((resolve, reject) => {
    setTimeout(() => {
        try {

            resolve("Yaaaay")
        } catch {
            reject("Naaaay")
        }
    }, 3000)

})
// .then(successMessage => console.log("success message:" + successMessage))
// .catch(errorMessage => console.log("error message:" + errorMessage));

function celebrate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
    
                resolve("Yaaaay")
            } catch {
                reject("Naaaay")
            }
        }, 3000)
    
    })
}

//celebrate()
// .then(successMessage => console.log("success message:" + successMessage))
    // .catch(errorMessage => console.log("error message:" + errorMessage));


function somethingGoodSomethingBad() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try {
                resolve("Good")
            } catch {
                reject("Bad")
            }
        }, 2000)
    })
}

somethingGoodSomethingBad()
.then(console.log)
.catch(console.log);