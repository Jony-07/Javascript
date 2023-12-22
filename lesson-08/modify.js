let person = {
    name: 'John',
    lastname: 'Morales',
    age: 22,
    email: 'jony25lopezml@gmail.com',
    fullName: function(){
       return this.name + ' ' + this.lastname;
    }
}

person.cellphone = '70059988';
console.log(person);
delete person.cellphone;
console.log(person);