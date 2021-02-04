import React, {useState} from 'react';
import TasksCollection from '../db/TasksCollection';

export const TaskForm = ({user}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    

    if (!task) return;

    MediaStreamError.call('tasks.insert', text);

    setText('');

    }

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Type to add new tasks" value={text} onChange={(e) => setText(e.target.value)}

            />

            <button type="submit">Add Task</button>
        </form>
    
    )
}