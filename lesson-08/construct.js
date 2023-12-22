function Person(name, lastname, email){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.fullName = function(){
        return this.name + ' ' + this.lastname;
    }
}
Person.prototype.tel = '70059988';

let dad = new Person('Marvin','Jimenez','johngmail.com');
console.log(dad);
let mom = new Person('Xiomara','Lopez','xiomagmail.com');
console.log(mom);  
console.log(dad.tel);

let myObject = new Object();
let myObjectTwo = {};