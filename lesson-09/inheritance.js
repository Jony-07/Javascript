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

    get lastname(){
        return this._lastname;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    fullName(){
        return this._name + ' ' + this._lastname;
    }

    toString(){
        return this.fullName();
    }
  
}

class Employee extends Person{

    constructor(name, lastname, department){
        super(name, lastname);
        this._department = department;
    }

    get department(){
        return this._department
    }

    set department(department){
        this._department = department;
    }

    //Overwrite
    fullName(){
        return super.fullName() + ', '+ this._department;
    }
}
 

let employee = new Employee('Jony','Morales','IT');
console.log(employee);
console.log(employee.fullName());
console.log(employee.toString());