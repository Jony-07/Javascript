console.log("EXAMPLE 1: Numbers");
let number = 10;
if(number == 1) {
    console.log("Is number 1");
}
else if(number == 2){
    console.log("Is number 2");
}
else if(number == 3){
    console.log("Is number 3");
}
else{
    console.log("Is number different to "+ 3 ); 
}
let month = 13;
let season;
console.log("EXAMPLE 2: Seasons");
if(month == 1 || month == 2 || month == 12) {
    console.log("Season: Winter");
}else if(month == 3 || month ==4 || month ==5){
    console.log("Season: Spring");
} 
else if(month == 6 || month == 7 || month == 8){
    console.log("Season: Summer");
}
else if(month == 9 || month == 10 || month == 11){
    console.log("Season: Autumn");
}else{
    console.log("Invalid season");
}
console.log("EXERCISE 1: Hours");
let currentHour = 17;
if(currentHour >= 6 && currentHour <= 11){
    console.log("Good morning");
}
else if(currentHour >= 12 && currentHour <= 18){
    console.log("Good afternoon");
}
else if(currentHour >= 19 && currentHour <= 24){
    console.log("Good night");
}
else if(currentHour >= 0 && currentHour <= 6){
    console.log("Sleeping");
}else{
    console.log("Invalid hour");
}