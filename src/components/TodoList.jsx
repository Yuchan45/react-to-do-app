import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const ONLY_WHITE_SPACES = /^\s*$/;

function TodoList() {

    const [tasks, setTasks] = useState([]);

    function addTaskToArray(task) {
        // Recibe un objeto (id y nombre de tarea) y lo agrega al array de tareas.
        if (!task.text || ONLY_WHITE_SPACES.test(task.text)) {
            return;
        }

        setTasks([...tasks, task]);
        return;
    }

    function completeTask(id) {
        let updatedTasks= tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    function removeTask(id) {
        const removeArr = tasks.filter(task => task.id !== id);
        setTasks(removeArr);
    };


    function updateTask(oldId, newTask) {
        if (newTask.text === '' || ONLY_WHITE_SPACES.test(newTask.text)) {
            return;
        };
        
        for (let i=0; i < tasks.length; i++) {
            if (tasks[i].id === oldId) tasks[i] = newTask;
        }

        return;
    }

    return (
        <div className="todo-container">
            <h1 className="title">What's the plan for today?</h1>
            <TodoForm edit={''} onSubmit={addTaskToArray} />
            <div className="todos-list-container">
                <Todo 
                    tasks={tasks}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    updateTask={updateTask}
                />
            </div>
        </div>
    )
}

export default TodoList