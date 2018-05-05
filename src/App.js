import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import {config} from './config/config';

import AddItem from './components/AddItem';
import ItemsList from './components/ItemsList';

import './App.css';

class App extends Component {

  constructor(){
    super();
    firebase.initializeApp(config);    
    this.state = {
      todo: []
    }
  }

  handleAddTodo(todo){
    let todos = this.state.todo;
    todos.push(todo);
    this.setState({todo:todos});
  }

  removeTodo(id){
    let todos = this.state.todo;
    let index = todos.findIndex(x => x.id === id);

    todos.splice(index, 1);
    this.setState({todo:todos});
  } 



  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="header-title">To-Do List</h2>
          <AddItem
              todo = {this.state.todo}
              addTodo = {(newTodo) => this.handleAddTodo(newTodo)}/>
        </div>
        <div className="content">
          <ItemsList 
              onRemove={(id) => this.removeTodo(id)} 
              todos={this.state.todo}
          />
              
        </div>
      </div>
    );
  }
}

export default App;
