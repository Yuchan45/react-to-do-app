import React, { useState, useEffect, useRef } from 'react';


function TodoForm({ edit, onSubmit }) {
    // Las funciones que recibira por props seran: handleAddTaskToArray y updateTodo.
    
    const [input, setInput] = useState(edit ? edit.value : '');
    const inputBox = useRef(null);

    useEffect(() => {
        // Esto es para que cada vez que se hace un cambio, se haga focus en el inputBox.
        inputBox.current.focus();
    }, [])

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
        onSubmit(newTask);  //onSubmit es: 'handleAddTaskToArray' en caso de agregar. Y 'submitEdit' en caso de editar.

        setInput('');
        inputBox.current.value = "";
        return;
    };


    return (
        <form onSubmit={formatTaskAndSubmit}>
            <input onChange={handleChange} ref={inputBox} value={input} name="newTask" className='todo-input' type="text" placeholder='Write here!' autoComplete="off" />
            <button className='add-task-btn'>Add Task!</button>
        </form>
    )
}

export default TodoForm