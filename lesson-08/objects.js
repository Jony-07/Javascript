let person = {
     name: 'John',
     lastname: 'Morales',
     age: 22,
     email: 'jony25lopezml@gmail.com',
     fullName: function(){
        return this.name + ' ' + this.lastname;
     }
}

console.log(person.name);
console.log(person);
console.log(person.fullName());

let personTwo = new Object();
personTwo.name = 'Gissela';
personTwo.lastname = 'Serrano';
personTwo.email = 'gisssela@gmail.com';
console.log(personTwo);