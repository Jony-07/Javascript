class Person{

    static personCounter = 0; // Atributos de clase
    //email = 'example@example.com'; // Atributo de objetos

    static get MAX_OBJ(){
        return 5;
    }

    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
       
        if(Person.personCounter < Person.MAX_OBJ){
            this._idPerson = ++Person.personCounter;
        }
        else{
            console.log("Se ha superado el numero maximo de objetos");
        }
        //console.log('Se incrementa el contador:'+Person.personCounter);
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
        return this._idPerson + ' ' + this._name + ' ' + this._lastname;
    }

    toString(){
        return this.fullName();
    }
    
    static saludar(){
        console.log('Greatings from static funct');
    }

    static greet(person){
        console.log(person.name);
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
 
let person = new Person('Edenilson','Morales');

let employee01 = new Employee('Jony','Morales','IT');
let employee02 = new Employee('Gissela','Serrano','IT');
let employee03 = new Employee('William','Portan','IT');
let employee04 = new Employee('Susan','Selaya','IT');
let employee05 = new Employee('Lucas','Flores','IT');
//console.log(employee);
//console.log(employee.fullName());
console.log(person.toString());
console.log(employee01.toString());

// person.saludar(); No se puede llamar un static desde objetos
Person.saludar();
Person.greet(person);
Employee.saludar();
Employee.greet(employee01);
console.log(Person.MAX_OBJ);

//console.log(Person.personCounter);
//console.log(Employee.personCounter);

//console.log(person.email);
//console.log(employee.email);