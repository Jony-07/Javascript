let a = -5;
let min = 0, max = 10;
console.log("AND (&&) OPERATOR");
if(a >= min && a <= max) {
    console.log("It's inside");
}
else{
    console.log("It's outside");
}
let vacations = false; daysOff = false;
console.log("OR (||) OPERATOR");
if(vacations == true || daysOff == true) {
    console.log("You can attend to soccer match");
}
else{
    console.log("You cannot attend to the event");
}
console.log("TERNARY OPERATOR");
let result = (3<2) ? "Tha's true" : "That's false";
console.log(result);
let number = 3;
result = (number % 2 ==0) ? "Even number":"Odd number";
console.log(result);