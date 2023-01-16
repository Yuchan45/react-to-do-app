import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({tasks, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        isComplete: false
    });

    function submitEdit(updatedTask) {
        updateTodo(edit.id, updatedTask);
        setEdit({
            id: null,
            value: '',
            isComplete: false
        });
    }

    if (edit.id) {
        return <TodoForm onSubmit={submitEdit} />
    } else {
        return tasks.map((task, i) => {
            return (
                <div className={task.isComplete ? 'todo-row complete' : 'todo-row'} key={i}>
                    <div key={task.id} onClick={() => completeTodo(task.id)} >
                        {task.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine onClick={() => removeTodo(task.id)} className="delete-icon"/>
                        <TiEdit onClick={() => setEdit({ id: task.id, value: task.text, isComplete: task.isComplete })} className="edit-icon"/>
                    </div>
                </div>
            );
        })
    }


}

export default Todo