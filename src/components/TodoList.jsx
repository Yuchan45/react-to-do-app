import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const ONLY_WHITE_SPACES = /^\s*$/;

function TodoList() {

    const [tasks, setTasks] = useState([]);

    function handleAddTaskToArray(task) {
        // Recibe un objeto (id y nombre de tarea) y lo agrega al array de tareas.
        if (!task.text || ONLY_WHITE_SPACES.test(task.text)) {
            return;
        }

        setTasks([...tasks, task]);
        return;
    }

    function completeTodo(id) {
        let updatedTasks= tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    function removeTodo(id) {
        const removeArr = tasks.filter(task => task.id !== id);
        setTasks(removeArr);
    };


    function updateTodo(oldId, newTask) {
        if (newTask.text === '' || ONLY_WHITE_SPACES.test(newTask.text)) {
            return;
        };
        
        for (let i=0; i < tasks.length; i++) {
            if (tasks[i].id === oldId) tasks[i] = newTask;
        }

        return;
    }

    return (
        <>  
            <h1>Todo Form</h1>
            <TodoForm edit={''} onSubmit={handleAddTaskToArray} />
            <h1>Todo´s</h1>
            <Todo 
                tasks={tasks}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    )
}

export default TodoList