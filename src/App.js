import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([])

    const toggleTodo = (index) => {
      const newTodos = [...todos]

          newTodos[index] = {
          ...todos[index],
          complete: !todos[index].complete
      }
        setTodos(newTodos)
    }


    return (
    <div className="container-fluid mt-3">
      <Form
          onSubmit={text => setTodos([{text, complete:false}, ...todos])}
      />
      <ul className="list-group mt-3 mb-3">
      {
              todos.map(({text, complete}, index) => (
                      <li
                          key={`${text}-${index}`}
                          onClick={e=> toggleTodo(index)}
                          class={`list-group-item ${complete ? 'bg-success text-white' : ''}`}
                          style={{
                              textDecoration: complete ? 'line-through' : '',
                            cursor: "pointer"
                          }}
                      >
                          {text}
                      </li>
                  )
              )
          }
      </ul>
      <button class="btn btn-primary" onClick={e => setTodos([])}>RESET </button>
    </div>
  );
}

export default App;
