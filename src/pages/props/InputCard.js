import React from "react";

function InputCard(props){
    return(
        <div key={props.id} className="todo-list-container">
            <h4 className="todo-list">
            <input 
                className="todo-list-input" 
                type="checkbox" 
                id="isCompleted" 
                htmlFor={props.for} 
                change={props.checked} 
                value={props.value}
                name={props.name}
            />{props.renderEvent}
            </h4>
        </div> 
    )
}

 export default InputCard