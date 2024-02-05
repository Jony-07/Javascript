class Person {

    static peopleCounter = 0;

    constructor(name, lastname, age){
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        this._idPerson = ++Person.peopleCounter;
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

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }

    get idPerson(){
        return this._idPerson;
    }

    toString(){
        return this._idPerson + ' ' + this._name + ' ' + this._lastname + ' ' + this._age;
    }
}

class Employee extends Person{

    static employeesCounter = 0;

    constructor(name, lastname, age, salary){
        super(name, lastname, age);
        this._salary = salary;
        this._idEmployee = ++Employee.employeesCounter;
    }

    get idEmployee(){
        return this._idEmployee;
    }

    get salary() { 
        return this._salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    toString(){
        return super.toString() + ' ' + this._salary + ', ' + this._idEmployee;
    }

}

class Client extends Person{

    static clientCounter = 0;

    constructor(name, lastname, age, registrationDate){
        super(name, lastname, age);
        this._registrationDate = registrationDate;
        this._idClient = ++Client.clientCounter;
    }

    get idClient(){
        return this._idClient
    }


    get registrationDate(){
        return this._registrationDate;
    }

    set registrationDate(registrationDate){
        this._registrationDate = registrationDate;
    }

    toString(){
        return super.toString() + ' ' + this.registrationDate + ', ' + this._idClient;
    }
}

let person01 = new Person('Glenda','Lucero','35');

let employee01 = new Employee('Maria', 'Rivera', '50', '500');

let client01 = new Client('Jose','Justo','60','04-08-2015')

console.log(person01.toString());
console.log(employee01.toString());
console.log(client01.toString());