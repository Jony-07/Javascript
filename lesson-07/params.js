let result = sumAll(5, 4, 13, 10, 9);

function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    return sum;
}
console.log(result);

let x = 10;

function changeValue(a){
    a = 20;
}

//Pass por valor
changeValue(x);
console.log(x);

const person = {
    name : 'Jony',
    lastname : 'Morales',
}

function changeObjectValue(a){
    a.name = 'Edenilson';
}

changeObjectValue(person);
console.log(person);