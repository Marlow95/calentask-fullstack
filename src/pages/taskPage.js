import React from 'react';
import '../css/tasks.css'

function TaskPage(){
    return (
        <div>
            <div className="task-input-container">
                <input className="task-input" type="text" placeholder="Add Items To Your Todo List Here"/>
            </div>
        </div>
    )
}

export default TaskPage