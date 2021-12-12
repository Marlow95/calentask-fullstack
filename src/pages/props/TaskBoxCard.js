import React from 'react'
import {Link} from 'react-router-dom'

function TaskBoxCard(props){
    return (
        <div className="task-boxes">
            <div>
                <h3>{props.title}</h3>
                    <div>{props.task}</div>
                <div className="task-boxes-footer">
                    <hr/>
                    <h6><Link to={props.link} className="task-boxes-link">{props.linkTitle}</ Link></h6>
                </div>
            </div>
        </div>
    )
}

export default TaskBoxCard