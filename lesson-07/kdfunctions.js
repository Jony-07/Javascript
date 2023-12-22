let x = function(a,b){return a + b;}
let result = x(1,2);
console.log(result);

//Self invoking
(function(a,b) {
    console.log('Executing the funct: '+(a*b));
})(5,5);

//Functs like objects

function jsFunction(a,b){
    console.log(arguments.length);
    return a + b;
 }
 jsFunction(5,5);

 var jsTextFunct = jsFunction.toString();
 console.log(jsTextFunct);

 // Arrow functions
console.log("Arrow functions")
 const sumArrowFunction = (a,b) => a / b;
 result = sumArrowFunction(8,2);
 console.log(result);

 
let sum = function(a,b){
    arguments[0];
    return a + b
};