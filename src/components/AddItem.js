import React, { Component } from 'react';
import firebase from 'firebase/app';

import './AddItem.css';

class AddItem extends Component {
  
  constructor(){
    super()
    this.state = {
    newTodo:{}
    }
  }

  handleSubmit(e){
    let text = document.querySelector('#add-todo').value;
    const database = firebase.database();
    const ref = database.ref('to-do');

    this.setState({
    newTodo:{
      name: text,
      id: new Date().getMilliseconds(),
    }}, function(){
      ref.push(this.state.newTodo);
      this.props.addTodo(this.state.newTodo);
    });
    e.preventDefault();
    document.querySelector('#add-todo').value = '';
  }
  

  render() {
    return (
      <div className="AddItem">
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Add your items..." id="add-todo" required/>
          <span className="outline"></span>
          <button type="submit" id="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
