import { useEffect, useReducer, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Todo from "./components/todo";
import axios from "axios";
const initialState = {
  todos: []
};


function reducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => {
      dispatch({ type: "SET_TODOS", payload: res.data });
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let todo = {
      description: new FormData(e.target).get("description"),
      id: String(Math.random()),
      date: new Date().toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };
    axios.post("http://localhost:8080/todos", todo).then((res) => {
      dispatch({ type: "ADD_TODO", payload: res.data });
    });
  }

  function removeTodo(id) {
    axios.delete(`http://localhost:8080/todos/${id}`).then(() => {
      dispatch({ type: "REMOVE_TODO", payload: id });
    });
  }

  return (
    <>
      <div className="wrap">
        <div className="neon">Todo List</div>
        <form onSubmit={handleSubmit} className="inp_box">
          <input type="text" name="description" />
          <button className="todo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add
          </button>
        </form>
        <div className="flex">
          {state.todos.map((todo) => (
            <Todo key={todo.id} user={todo} removeTodo={removeTodo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;