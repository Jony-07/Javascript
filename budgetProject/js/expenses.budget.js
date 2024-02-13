
class Expenses extends Data{

    static expensesCounter = 0;

    constructor(description, amount) {
        super(description, amount);
        this._idExpense = ++Expenses.expensesCounter;
    }

    get id() { return this._idExpense; }

}