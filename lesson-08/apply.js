let person01 = {
    name : 'John',
    lastname: 'Morales',
    fullName: function (title, tel) {
        //return this.name + ' ' + this.lastname;
        return title + ': ' + this.name + ' ' + this.lastname+ ', ' + tel;
    }
}

let person02 = {
    name : 'Gissela',
    lastname: 'Serrano',
}

// Apply use 
person01.fullName();
let array = ['Ing','70059988'];
console.log(person01.fullName.apply(person02,array));



