let myNumber = "18";
let age = Number(myNumber);

if(isNaN(age)){
    console.log("Is not a number");
}
else{
    if(age >= 18){
        console.log("You can vote");
    }
    else{
        console.log("You can't vote. You are younger");
    }
}