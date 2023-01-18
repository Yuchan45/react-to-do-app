import React, { useState, useEffect, useRef } from 'react';

function TodoHeaderEdit({ title, onSubmit }) {
    const editTitleInput = useRef(null);
    const [editTitle, setEditTitle] = useState(title);


    useEffect(() => {
        // Esto es para que cada vez que se hace un cambio, se haga focus en el inputBox.
        editTitleInput.current.focus();
    }, []);

    function handleBlur() {
        onSubmit(editTitle);
        return;
    }

    function submitNewTitle(e) {
        e.preventDefault();

        onSubmit(editTitle);
        return;
    };

    function handleChange(e) {
        setEditTitle(e.target.value);
        return;
    };


    return (
        <form onSubmit={submitNewTitle} className="title-edit-form">
            <input onChange={handleChange} onBlur={handleBlur} ref={editTitleInput} value={editTitle} name="newTitle" className='title-edit-input' type="text" placeholder='Title...' autoComplete="off" />
        </form>
    )
};

export default TodoHeaderEdit;