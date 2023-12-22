let person = {
    name: 'John',
    lastname: 'Morales',
    age: 22,
    email: 'jony25lopezml@gmail.com',
    fullName: function(){
       return this.name + ' ' + this.lastname;
    }
}

// Concat
console.log(person.name + ' ' + person.lastname);
for(propierty in person){
    console.log(propierty + ': ' + person[propierty]);
}

let arryPerson = Object.values(person);
console.log(arryPerson);

let stringPerson = JSON.stringify(person);
console.log(stringPerson);