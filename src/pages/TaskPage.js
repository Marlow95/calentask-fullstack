import React from 'react';
import Modal from '../main/modal';
import TaskBoxCard from './props/TaskBoxCard'
import InputCard from './props/InputCard'
import '../css/props-css/TaskBoxCard.css'
import '../css/TaskPage.css'

function TaskPage(){
    const myModal = React.useRef(null)
    let inputCreated = false

    const [todoInput, setTodoInput] = React.useState({
        todo: '',
        isCompleted: false
    })
    

    function getTodoInput(event){
        const {name, value, type, checked } = event.target
        setTodoInput(prevTodoInput => {
            return {
                ...prevTodoInput,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function createList(){
        inputCreated = true
    } 
    createList()

    return (
        <div className="task-container">
            <div className="task-input-container">
                <input className="task-input" type="text" placeholder="Add Items To Your Todo List Here" onChange={getTodoInput} name="todo" value={todoInput.todo}/>
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
                    {/* TaskBoxCard is passed via props. See the props folder in the pages folder */}
                    <TaskBoxCard title="Upcoming Tasks" linkTitle="Upcoming Tasks"/>
                    <TaskBoxCard title="Completed Tasks" task={todoInput.isCompleted ? 'todo task goes here' : ''} linkTitle="Completed Tasks"/>
                </div>
                <div className="task-flex-column-2">
                    <div className="column-2-task-box">
                        <h3>Recently Added</h3>
                        <div className="todo-list-container">
                            <h4 className="todo-list">
                                <input className="todo-list-input" type="checkbox"/>Go to car wash.
                            </h4>
                        </div>
    
                        {inputCreated ? 
                            <InputCard 
                            renderEvent={todoInput.todo} //renders input on page 
                            change={getTodoInput} //handles the change aka onChange
                            name="isCompleted"
                            value={todoInput.isCompleted} // sets the value of the checkbox to the bool in state
                            for="isCompleted"
                            /> : ''
                        }
                        
                        <div className="column-2-task-box-footer">
                        <hr />
                        <h6>Recently Added</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage