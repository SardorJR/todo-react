import React, { useState } from 'react';

function Todo({ user, removeTodo }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheck = () => {
        setIsChecked(prevState => !prevState)
    }

    return (
        <div className="box">
            <span></span>
            <div className="title-box">
                <h3 className={isChecked ? 'checked' : ''}
                    onClick={handleToggleCheck} >{user.description}</h3>
                <img onClick={() => removeTodo(user.id)} src="/img/9024966_x_circle_light_icon (1).png" alt="" />
            </div>
            <div className="date">
                <p>{user.date}</p>
            </div>
        </div>
    )

}

export default Todo
