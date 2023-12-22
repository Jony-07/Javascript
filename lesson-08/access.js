let person = {
    name: 'John',
    lastname: 'Morales',
    age: 22,
    email: 'jony25lopezml@gmail.com',
    fullName: function(){
       return this.name + ' ' + this.lastname;
    }
}

console.log(person['name']);

for(propierty in person){
    console.log(propierty);
    console.log(person[propierty]);
}