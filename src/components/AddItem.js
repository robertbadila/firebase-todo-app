import React, { Component } from 'react';

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
    this.setState({
    newTodo:{
      name: text,
      id: new Date().getTime(),
    }}, function(){
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
