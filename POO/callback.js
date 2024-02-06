function function01(){
    console.log('Function 01');
}

function function02(){
    console.log('Function 02');
}

function01();
function02();

function print(message){
    console.log(message);
}

function add(op1,op2, callbackFunction){
    let res = op1 + op2;
    callbackFunction(res);
}

add(5,3,print)
