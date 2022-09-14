import { useRef } from "react";
import Swal from "sweetalert2";

const ExpenseForm = (props) => {

  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descriptionRef = useRef();

  const onSubmit =(event) => {
    // alert (titleRef.current.value);
    event.preventDefault();
   if(checkForm()){

      let expense = {
       // id: Math.random(),
      title: titleRef.current.value,
      date: dateRef.current.value,
      value: valueRef.current.value,
      description: descriptionRef.current.value,
     };
  // console.log(newExpense)
    props.newExpenseHandler(expense)
    clearForm();
   }
  
  };

  const checkForm=() =>{
    if(
      titleRef.current.value !== "" && 
      dateRef.current.value !== "" &&
      valueRef.current.value !== "" &&
      descriptionRef.current.value !== ""
      ){
      return true;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill new expense data!',
        showConfirmButton: false,
        showCancelButton: false,
        timer: 1500
    });
    return false;
  }

  const clearForm=() => {
    titleRef.current.value ="";
    dateRef.current.value ="";
    valueRef.current.value ="";
    descriptionRef.current.value ="";
  };
    return ( 
    <form className="row" onSubmit={onSubmit}>
    <div className="mb-3 col-md-6">
      <label className="form-label">Title</label>
      <input type="text" className="form-control addTitle" aria-describedby="" ref={titleRef}/>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Date</label>
      <input type="date" className="form-control addDate" aria-describedby="" ref={dateRef}/>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Value</label>
      <input type="number" className="form-control addValue" aria-describedby="" ref={valueRef}/>
    </div>

    <div className="mb-3 col-md-6">
      <label htmlFor="title" className="form-label">Description</label>
      <input type="text" className="form-control addDescrption" aria-describedby="" ref={descriptionRef}/>
    </div>
    <div className="mb-3 col-md-12 text-right">
      <button type="submit" className="btn btn-primary addBtn">Add</button>
    </div>
  </form>
    );
};

export default ExpenseForm;