import React, { useEffect, useState } from 'react';

function Todo({ user, removeTodo }) {
    const [isRemoving, setIsRemoving] = useState(false);

   
    const handleRemove = () => {
      setIsRemoving(true);
     
      setTimeout(() => {
        removeTodo(user.id);
      }, 500); 
    };
    useEffect(() => {
        document.querySelectorAll('h3').forEach(link => {
          link.onclick=(event)=>{
            event.preventDefault()
            link.classList.toggle('checked')
          }})
      
      }, [])
      
    return (
        <div className={`box ${isRemoving ? 'fade-out' : ''}`}>
            <span></span>
            <div  className="title-box" >
                <h3>{user.description}</h3>
                <img onClick={handleRemove} src="/img/9024966_x_circle_light_icon (1).png" alt="" />
            </div>
            <div className="date">
                <p>{user.date}</p>
            </div>
        </div>
    )

}

export default Todo



