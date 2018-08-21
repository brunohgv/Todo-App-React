import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
      lastId: 1,
    }
  }

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.lastId
    }
    const newTodos = this.state.todos
    newTodos.push(newTodo)
    this.setState({
      todos: newTodos,
      newTodo: '',
      lastId: this.lastId + 1
    })
  }

  deleteTodo = (index) => {
    const todos = this.state.todos
    delete todos[index]
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD React</h1>
        </header>
        <div className="container">
          <div className="row justify-content-md-center my-4">
            <input 
              type="text"
              name="todo"
              className="form-control"
              placeholder="Add new todo"
              onChange={this.handleChange}
              value={this.state.newTodo} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addTodo}>Add Todo</button>
          </div>
          <div className="row justify-content-md-center">
            <ul className="list-group">
              {this.state.todos.map((todo, index) => {
                return <li key={todo.id} className="list-group-item">
                    {todo.name}
                    <button 
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {this.deleteTodo(index)}}>X</button>
                  </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
