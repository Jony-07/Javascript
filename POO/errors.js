'use strict';

try {
    let x = 10;
    throw 'My mistake';
} catch (error) {
    console.log(error);
}
finally{
    console.log("Always work");
}

console.log("This program is working");