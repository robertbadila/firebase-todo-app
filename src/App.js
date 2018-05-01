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
    
    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('todos');
    
    this.state = {
      todo: []
    }
  }

  componentWillMount(){
    const todos = this.state.todo;

    this.database.on('child_added',(snap) => {
      todos.push({
        id: snap.key,
        todoName: snap.val().todoName
      })
    })

    this.setState({todo: todos});
  }


  handleAddTodo(todo){
    let todos = this.state.todo;
    todos.push(todo);
    this.setState({todo:todos});
    this.database.push().set({todoName: todo});
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
