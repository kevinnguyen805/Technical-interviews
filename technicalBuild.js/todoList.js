//TODO: APP.JS
import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist.js'

function App() {

  const [todoList, addTodoList] = useState([])

  const [todo, addTodo] = useState('')


  const handleChanges = event => {
    event.preventDefault()
    addTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTodo('')
  }

  const addingItem = () => {
    addTodoList([...todoList, todo])
  }

  
 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Add todo</label>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={handleChanges}
        />
        <button onClick={addingItem}>Add</button>
      </form>

     <Todolist todos={todoList} addTodoList={addTodoList}/>

    </div>
  );
}

export default App;





//TODO: TODOLIST
import React, {useState} from 'react'


function TodoList(props){
     const deleteItem = (index) => {
          const newTasks = props.todos.filter((_, item) => item !== index)
          props.addTodoList(newTasks)
     }
     return(
          <div>
               <p>todo items </p>
               {
                    props.todos.map((item, index) => {
                         return (
                              <div key={index}>
                                   <p>{item}</p>
                                   <button onClick={() => deleteItem(index)}>delete</button>
                              </div>
                         )
                    })
               }
          </div>
     )
}
export default TodoList