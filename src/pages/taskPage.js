import React from 'react';
import '../css/tasks.css'

function TaskPage(){

    const [values, setValue] = React.useState({
        task: ''
    })

    function addTask(task){
        setValue(values => ({
            ...values,
            task: task.value
        }))
    }
    return (
        <div className="task-container">
            <div className="task-input-container">
                <input className="task-input" type="text" placeholder="Add Items To Your Todo List Here" />
                <picture>
                    <img src="/images/carbon_add.png" alt="add-icon" className="add-icon" />
                    <button onClick={addTask}>Added</button>
                </picture>
            </div>
            <div className="task-flex-parent">
                <div className="task-flex-column-1">
                    <div className="task-flex-row">
                        <div>
                            <p>Text Goes Here</p>
                            <button>All Tasks</button>
                        </div>
                    </div>
                    <div className="task-flex-row">
                        <div>
                            <h4>Upcoming Tasks</h4>
                            <hr/>
                            <h6>Upcoming Tasks</h6>
                        </div>
                    </div>
                    <div className="task-flex-row">
                        <div>
                            <h4>Completed Tasks</h4>
                            <hr/>
                            <h6>Completed Tasks</h6>
                        </div>
                    </div>
                </div>
                <div className="task-flex-column-2">
                    <div>
                        <h4>Recently Added</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage