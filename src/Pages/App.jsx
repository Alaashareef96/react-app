import { useState } from "react";
import Swal from "sweetalert2";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseTable from "../Components/ExpenseTable";
import "../Resources/css/custom.css";
import MainImge from "../Resources/img/m1.png";
function App() { 

const [expenses,setExpenses]= useState ([]);

let onNewExpense = (newExpense) => {
    saveNewExpense(newExpense)
}

let onDeleteHandler =(id) =>{
   let filteredExpense= expenses.filter((element) => element.id != id );
    setExpenses(filteredExpense)
}

let saveNewExpense = (newExpense) => {
    fetch("https://react-app-84320-default-rtdb.firebaseio.com/expenses.json",{
        method: "POST",
        body: JSON.stringify(newExpense),
        headers:{
            "Contet-Type":"application/json",
        },
    }).then((response) =>{
         return response.json();
        })
        .then((result) => {
            newExpense.id = result.name;
            setExpenses((prevExpenses) =>{
                return [newExpense,...prevExpenses];
            });
            Swal.fire({
                icon: 'success',
                title: 'Saved',
                text: 'Your expense has been saved.',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((error)=> {})
};

let fetchExpense = () => {
        // Swal.showLoading()
        fetch("https://react-app-84320-default-rtdb.firebaseio.com/expenses.json",{
            method: "GET",
            headers:{"Contet-Type":"application/json",},
        }).then((response) =>{
            return response.json();
        })
            .then((result) => {
                // Swal.hideLoading();
                const fetchedExpenses = [];
              for (const item in result){
                  fetchedExpenses.push(result[item])
              }
                setExpenses(fetchedExpenses)
            })
            .catch((error)=> {
                // Swal.hideLoading();
            })
};
    fetchExpense();
      return(
      <div className="container mt-5">
     
      <div className="row">
       
        <div className="col-sm-6">
          <img src={MainImge} className="img-fluid" alt=""/>
        </div>
        <div className="col-sm-6 mt-5">
    <div className="row tit">
      <h4 className="">wellcom to Momen Expense Manager </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam
      </p>
    </div>
     {/* ExpenseForm */}
        <ExpenseForm newExpenseHandler={onNewExpense}/>
        
  </div>
       
      </div>
     
      {/* ExpenseTable */}
     <ExpenseTable expensesDate={expenses} deleteHandler={onDeleteHandler}/>
    
    </div>
      );
}
export default App;
