import React from 'react';
import {Task} from './Task';
import {useTracker} from 'meteor/react-meteor-data';
import {TasksCollection} from '../api/TasksCollection';
import {TaskForm} from './TaskForm';

const togglechecked =({_id, ischecked}) => {
    TasksCollection.update(_id, {
        $set: {
            ischecked: !ischecked
        }
    })
};

const deleteTask = ({_id}) => TasksCollection.remove(_id);

export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1} }).fetch());
}

return (
    <div>
        <h1>Welcome to meteor</h1>
        
        <TaskForm />
        <ul>
            {tasks.map(task => <Task key={task_id} task={task}/>)}
            onCheckboxClick={togglechecked}
            onDeleteClick={deleteTask}
        </ul>
    
    </div>
)