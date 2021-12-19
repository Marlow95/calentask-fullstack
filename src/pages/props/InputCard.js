import React from "react";

function InputCard(props){
    return(
        <div key={props.id} className="todo-list-container">
            <h4 className="todo-list">
            <input 
                className="todo-list-input" 
                type="checkbox"  
                value={props.value}
            />{props.renderEvent}<button onClick={props.delete}>Delete</button>
            <button>Edit</button>
            </h4>
        </div> 
    )
}

 export default InputCard