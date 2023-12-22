class Person{

    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
  
}

let person01 = new Person('Giss','Serrano');
console.log(person01.name);
person01.name = 'Gissela';
console.log(person01.name);