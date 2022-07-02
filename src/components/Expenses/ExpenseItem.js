import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/card";

// function ExpenseItem(props){
const ExpenseItem = (props) => {
   
    // let title = "Birthday Party";
    // const [newtitle, setNewTitle] = useState();

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newtitle);
    // }

    // const changeHandler = (event) => {
    //      setNewTitle(event.target.value);
    // }

    return(
        <Card className="expense-item">
            <ExpenseDate
                date = {props.date}
             />
            <div className="expense-item-description">
                <h2>{ props.title }</h2>        
                <div className="expense-item-price">Rs { props.amount }/-</div>
            </div>
            {/* <input type="text" value={newtitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );

}

export default ExpenseItem;