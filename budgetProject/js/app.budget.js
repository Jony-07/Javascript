const incomes = [ new Income('Borrowed money',100),new Income('Salary',800)];
const expenses = [new Expenses('Glasses',400),new Expenses('Internet',40)];


function fillOut(){
    showIncomes();
    showExpenses();
}

function showIncomes(){
    let text = '';
    for(let income of incomes){
        text += `<tr>
                    <td>${income.description}</td>
                    <td>${income.amount}</td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick="deleteIncome(${income.id})">
                            Delete
                        </button>
                    </td>
                </tr>`
    }
    document.getElementById('incomeList').innerHTML = text;
}

function showExpenses(){
    let text = '';
    for(let expense of expenses){
        text += `<tr>
                    <td>${expense.description}</td>
                    <td>${expense.amount}</td>
                    <td>
                        <button type="button" class="btn btn-warning"
                        onclick="deleteExpense(${expense.id})">
                            Delete
                        </button>
                    </td>
                </tr>`
    }
    document.getElementById('expensesList').innerHTML = text;
}

function deleteExpense(id){
    let index = expenses.findIndex(expense => expense.id === id);
    expenses.splice(index, 1);
    showExpenses();
}

function deleteIncome(id) {
    let index = incomes.findIndex(income => income.id === id);
    incomes.splice(index,1);
    showIncomes();
}

function addDato(){
    const form = document.forms['form'];
    let type = form.type.value;
    let description = form.description.value;
    let amount = form.amount.value;
    if(description != '' && amount != ''){
        if(type == 'income'){
            incomes.push( new Income(description, +amount));
            showIncomes();
        }
        else if(type == 'expense'){
           expenses.push( new Expenses(description, +amount));
          showExpenses();
        }
    }
}