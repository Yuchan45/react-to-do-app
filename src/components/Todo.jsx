import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({tasks, completeTask, removeTask, updateTask}) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        isComplete: false
    });

    function submitEdit(updatedTask) {
        updateTask(edit.id, updatedTask);
        setEdit({
            id: null,
            value: '',
            isComplete: false
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    } else {
        return tasks.map((task, i) => {
            return (
                <div className={task.isComplete ? 'todo-row complete' : 'todo-row'} key={i}>
                    <div key={task.id} onClick={() => completeTask(task.id)} >
                        {task.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine onClick={() => removeTask(task.id)} className="delete-icon"/>
                        <TiEdit onClick={() => setEdit({ id: task.id, value: task.text, isComplete: task.isComplete })} className="edit-icon"/>
                    </div>
                </div>
            );
        })
    }


}

export default Todo;