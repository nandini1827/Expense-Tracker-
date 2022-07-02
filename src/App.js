import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";


let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 80000,
        date: new Date("2022-1-27")
    },
    {
        id: 'e2',
        title: 'Trip',
        amount: 4500,
        date: new Date("2022-4-9")
    },
    {
        id: 'e3',
        title: 'Food',
        amount: 1500,
        date: new Date("2022-4-20")
    },
    {
        id: 'e4',
        title: 'Birthday Party',
        amount: 5000,
        date: new Date("2022-5-18")
    }
]

// function App(){
const App = () => {

    // let expenseDate = new Date(2022, 5, 18);
    // let expenseTitle = "Birthday Party";
    // let expenseAmount = 200;

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense , ...expenses];
        setExpenses(updatedExpense);
    }

    return (
            <div>
                {/* <h3>first component</h3>
                <p>This is a line</p> */}
                <NewExpense onAddExpense = {addExpenseHandler}/>
                <Expenses item={expenses}/>
            </div>
     );
}

export default App;