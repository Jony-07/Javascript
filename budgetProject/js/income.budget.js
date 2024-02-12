
class Income extends Data{

    static incomeCounter = 0;

    constructor(description, amount) {
        super(description, amount);
        this._idIncome = ++Income.incomeCounter;
    }

}