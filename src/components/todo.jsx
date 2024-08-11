import React, { useEffect } from 'react';

function Todo({ user, removeTodo }) {

    useEffect(() => {
        document.querySelectorAll('h3').forEach(link => {
          link.onclick=(event)=>{
            event.preventDefault()
            link.classList.toggle('checked')
          }})
      
      }, [])
      
    return (
        <div className="box">
            <span></span>
            <div className="title-box">
                <h3>{user.description}</h3>
                <img onClick={() => removeTodo(user.id)} src="/img/9024966_x_circle_light_icon (1).png" alt="" />
            </div>
            <div className="date">
                <p>{user.date}</p>
            </div>
        </div>
    )

}

export default Todo



