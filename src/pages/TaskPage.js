import React from 'react';
import Modal from '../main/modal';
import TaskBoxCard from './props/TaskBoxCard'
import InputCard from './props/InputCard'
import '../css/props-css/TaskBoxCard.css'
import '../css/TaskPage.css'

function TaskPage(){
    const myModal = React.useRef(null)

    const [todoInput, setTodoInput] = React.useState({
        description: '',
        isComplete: false
    })

    console.log(todoInput.description)

    function getTodoInput(event){
        const {name, value, type, checked } = event.target
        setTodoInput(prevTodoInput => {
            return {
                ...prevTodoInput,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function submitPostTodoApi(){
        fetch('http://localhost:4000/api/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: todoInput.description,
                isComplete: todoInput.isComplete
            })
            
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const [apiData, setApiData] = React.useState([])

    function getTodoApiData(){
        fetch('http://localhost:4000/api/todo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }

    function deleteTodoApiData(id){
        fetch(`http://localhost:4000/api/todo/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => setApiData(data.filter(data => data.todoId !== id)))
        .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getTodoApiData()
    },[])

    function createList(event){
        event.preventDefault()
        submitPostTodoApi()
    } 

    return (
        <div className="task-container">
            <div className="task-input-container">
                <form>
                    <input className="task-input" 
                    type="text" 
                    placeholder="Add Items To Your Todo List Here" 
                    onChange={getTodoInput} 
                    name="description" 
                    value={todoInput.description}/>
                </form>
                <picture>
                    <img src="/images/carbon_add.png" alt="add-icon" className="add-icon" onClick={createList}/>
                    <img src="/images/uit_calender.png" alt="calender-icon" className="calender-icon" onClick={() => myModal.current.open()}/>
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
                    <TaskBoxCard title="Completed Tasks" task={todoInput.isComplete ? 'todo task goes here' : ''} linkTitle="Completed Tasks"/>
                </div>
                <div className="task-flex-column-2">
                    <div className="column-2-task-box">
                        <h3>Recently Added</h3>
                        {apiData.map(data => {
                            return(
                                <InputCard 
                                id={data.todoId}
                                key={data.todoId}
                                renderEvent={data.description} //renders input on page 
                                value={data.isComplete} // sets the value of the checkbox to the bool in state
                                delete={()=> deleteTodoApiData(data.todoId)}
                                />
                            )
                        })}
                    </div>
                    <div className="column-2-task-box-footer">
                        <hr />
                        <h6>Recently Added</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage