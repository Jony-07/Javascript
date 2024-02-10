class Person {

    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    get lastname(){
        return this._lastname;
    }

}


