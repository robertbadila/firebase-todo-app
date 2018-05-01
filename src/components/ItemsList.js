import React, { Component } from 'react';
import Item from './Item';

import './ItemsList.css';

class ItemsList extends Component {

  removeTodo(id){
    this.props.onRemove(id);
  }

  render() {
    let todoItems; 
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
        <ul>  
          <Item onRemove ={(id) => this.removeTodo(id)} key={todo.id} todo={todo.name} id={todo.id}/>
        </ul>
        )})
      }
    return (
      <div className="ItemsList">
         {todoItems}  
      </div>
    );
  }
}

export default ItemsList;
