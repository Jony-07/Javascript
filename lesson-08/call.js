let person01 = {
    name : 'John',
    lastname: 'Morales',
    fullName: function (title, tel) {
        return title + ': ' + this.name + ' ' + this.lastname+ ', ' + tel;
    }
}

let person02 = {
    name : 'Gissela',
    lastname: 'Serrano',
}

// Call use
person01.fullName();
person01.fullName.call(person02);
console.log(person01.fullName.call(person02, 'Ing', '70059988'));