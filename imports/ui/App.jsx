import React from 'react';
import {Task} from './Task';

const tasks = [
    {_id: 1, text: 'First Task'},
    {_id: 2, text: 'Second Task'},
    {_id: 3, text: 'Third Task'},
];

export const App = () => (
    <div>
        <h1>Welcome to meteor</h1>
        <ul>
            {tasks.map(task => <Task key={task_id} task={task}/>)}
        </ul>
    
    </div>
)