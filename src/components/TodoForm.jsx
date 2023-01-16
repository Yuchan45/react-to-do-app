import React, { useState } from 'react';


function TodoForm({onSubmit}) {
    // Las funciones que recibira por props seran: handleAddTaskToArray y updateTodo.

    const [input, setInput] = useState([]);

    function handleChange(e) {
        setInput(e.target.value);
        return;
    };

    function formatTaskAndSubmit(e) {
        e.preventDefault();

        const newTask = {
            id: new Date().valueOf(),
            text: input,
            isComplete: false
        }
        setInput('');
        onSubmit(newTask);  //onSubmit es: 'handleAddTaskToArray' en caso de agregar. Y 'submitEdit' en caso de editar.
        return;
    };


    return (
        <form onSubmit={formatTaskAndSubmit}>
            <input onChange={handleChange} name="newTask" className='todo-input' type="text" placeholder='Add a Task!' />
            <button>Add Task!</button>
        </form>
    )
}

export default TodoForm