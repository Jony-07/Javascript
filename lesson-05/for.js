
for(let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("BREAK");
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(i);
        break;
    }
}
console.log("CONTINUE");
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue;
    }
    else{
        console.log(i);
    }
}