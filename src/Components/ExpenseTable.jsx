import ExpenseTableRow from "./ExpenseTableRow";

const ExpenseTable = (props) => {

  let onDeleteHandler=(id) =>{
    props.deleteHandler(id)
  }

    return <div className="row mt-5 mb-5">
      <div className="custom-card ">
        <table className="table ">
          <thead>
            <tr>
              <th> Title</th>
              <th> Date</th>
              <th>value</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr id="addRow"></tr>
            {/* ExpenseTableRow */}
            {props.expensesDate.map((expense) =>(
               <ExpenseTableRow
                   key={expense.id}
                   id={expense.id}
                   title={expense.title}
                   date={expense.date}
                   value={expense.value}
                   description={expense.description}
                   deleteExpenseHandler={onDeleteHandler}
               />
            ))}
         
           
          </tbody>
        </table>
       
      </div>
    </div>
}

export default ExpenseTable;