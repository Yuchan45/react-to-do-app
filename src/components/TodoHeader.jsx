import React, { useState } from 'react';
import { TiPen } from 'react-icons/ti';

import TodoHeaderEdit from './TodoHeaderEdit';

function TodoHeader() {

    const [editTitle, setEditTitle] = useState('');





    if (editTitle != '') {
        return <h1 className="title">Edit Title!</h1>;
    } else {
        return(
            <div className="header-title">
                <h1 className="title">Edit Title!</h1>
                
                <TiPen className="edit-icon"/>
            </div>
        );
    }
}

export default TodoHeader