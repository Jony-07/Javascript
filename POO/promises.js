let promise =  new Promise((resolved, rejected) => {
    let expression = true;
    if(expression)
    resolved('Rresolved');
    else
    rejected('Rrejected');
});

promise.then(
    value => console.log(value), 
    error => console.log(error)
);

let promise02 = new Promise((resolved) => {

    setTimeout( () => resolved('Promise and timed out'),3000);
});

//promise02.then(value => console.log(value));

async function functionPromise(){
    return 'Promise and asyinc';
}

//functionPromise().then(value => console.log(value));

// Async and await promise

async function asyncAndPromise(){
    let promise = new Promise( resolved => {
        resolved('Promise and await');
    })
    console.log(await promise);
}

//asyncAndPromise();

// Promise, async, await and setTimeout

async function strongFunction(){
    let promise = new Promise( resolved => {
        setTimeout(() => resolved('promise, async await and setTimeout'),3000)
    })
    console.log(await promise)

}

strongFunction();