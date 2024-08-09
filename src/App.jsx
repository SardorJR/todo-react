import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo'

function App() {
  const [users, setUsers] = useState([])
  function Submit(e) {
    e.preventDefault()
    let todo = {
      description: new FormData(e.target).get('description'),
      id: Math.random(),
      date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
    setUsers([...users, todo])
  }
  function removeTodo(id) {
    setUsers(users.filter(todo => todo.id !== id))
  }
  return (
    <>
      <div className="wrap">
        <div className='neon'>Todo List</div>
        <form onSubmit={Submit} className="inp_box">
          <input type="text" name='description' />
          <button className='todo'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add
            </button>
        </form>
        <div className="flex">

          {users.map(todo => (
            <Todo key={todo.id} user={todo} removeTodo={removeTodo} />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
