import React, { useState } from 'react';
import { TiPen } from 'react-icons/ti';

import TodoHeaderEdit from './TodoHeaderEdit';

function TodoHeader() {

    const [title, setTitle] = useState("What's the plan for today?");
    const [flag, setFlag] = useState(false);

    function editTitle(newTitle) {
        setTitle(newTitle);
        setFlag(!flag);
        return;
    };


    if (flag) {
        return <TodoHeaderEdit title={title} onSubmit={editTitle} />
    } else {
        return(
            <div className="header-title">
                <h1 className="title" onClick={() => { setFlag(!flag); }} >{title}</h1>
                <TiPen className="edit-icon" onClick={() => { setFlag(!flag); }} />
            </div>
        );
    }

}

export default TodoHeader;