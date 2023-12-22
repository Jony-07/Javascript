// declartions
//First way
console.log("Example");
let car = new Array('BMW','Volvo','Mercedes');
const cars = ['Volvo','Mercedes','BMW'];
console.log(cars);
console.log(cars[2]);
console.log("FOR");
for (let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}
console.log("FOREACH");
cars.forEach(car => {
    console.log(car);
});

cars[0] = 'Ferrari';
console.log(cars[0]);
cars.push('Audi');
console.log(cars[3]);

console.log(Array.isArray(cars));