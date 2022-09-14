const ExpenseTableRow = (props) => {

    let deleteExpenseHandler = () => {
     props.deleteExpenseHandler(props.id)
    };

    return  <tr>
    <td> {props.title}</td>
    <td> {props.date}</td>
    <td>{props.value}</td>
    <td colSpan="2">{props.description} </td>
    <td className="text-right"><a href="#" onClick={deleteExpenseHandler} className="delete"><i className="fa fa-trash-o"
          aria-hidden="true"/></a></td>
  </tr>

}
export default ExpenseTableRow;