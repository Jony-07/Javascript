
class Employee{

    constructor(name, salary){
        this._name = name;
        this._salary = salary;
    }

    getDatails(){
        return `Name: ${this._name}, Salary: ${this._salary}`;
    }
}

class Manager extends Employee{

    constructor(name, salary, department){
        super(name, salary);
        this._department = department;
    }

    getDatails(){
        return ` ${super.getDatails()}, Depto: ${this._department}`;
    }

}


function print(type){
   console.log( type.getDatails());
   if(type instanceof Employee){
    console.log('This is a employee');
   }
}

let manager01 = new Manager('Jony',1000,'TI');
print(manager01);

//console.log(manager01.getDatails());

