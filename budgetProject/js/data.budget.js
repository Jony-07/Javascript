
class Data{

    constructor(description, amount){
        this._description = description;
        this._amount = amount;
    }

    get description(){
        return this._description;
    }

    get amount(){
        return this._amount;
    }

    set description(descripcion){
        this._description = descripcion;
    }

    set amount(amount){
        this._amount = amount;
    }

}