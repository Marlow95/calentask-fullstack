import React, { useRef } from 'react';
import Modal from '../main/modal';
import '../css/tasks.css'

function TaskPage(){
    const myModal = useRef(null)
    const [task, setTask] = React.useState({
        task: ''
    })

    function addTask(task){
        setTask(taskInput => ({
            ...taskInput,
            task: task.value
        }))
    }
    return (
        <div className="task-container">
            <div className="task-input-container">
                <input className="task-input" type="text" placeholder="Add Items To Your Todo List Here" />
                <picture>
                    <img src="/images/carbon_add.png" alt="add-icon" className="add-icon" onClick={() => myModal.current.open()}/>
                </picture>
                <Modal ref={myModal}>
                    <h1>Add Tasks</h1>
                    <hr />
                    <button>Save</button><button>Cancel</button>
                </Modal>
            </div>
            <div className="task-flex-parent">
                <div className="task-flex-column-1">
                    <div className="task-boxes-greeting">
                        <div>
                            <h1>You’ve Got <span>4 Tasks</span> To Complete <span>By 10pm</span></h1>
                            <button><h2>All Tasks</h2></button>
                        </div>
                    </div>
                    <div className="task-boxes">
                        <div>
                            <h4>Upcoming Tasks</h4>
                            <div className="todo-list-container">
                                <h5 className="todo-list"><input type="checkbox"/>Go to school at 7am. This task is important.</h5>
                            </div>
                            <hr/>
                            <h6>Upcoming Tasks</h6>
                        </div>
                    </div>
                    <div className="task-boxes">
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
                        <div className="todo-list-container">
                            <h5 className="todo-list"><input type="checkbox"/>Go to car wash.</h5>
                        </div>
                        <hr />
                        <h6>Recently Added</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage