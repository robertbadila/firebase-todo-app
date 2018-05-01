import React, { Component } from 'react';
import './ItemsList.css';

class Item extends Component {
  removeTodo(){
    const id = this.props.id;
    this.props.onRemove(id);
  }

  render() {
    return ( 
      <li className="Item">
         {this.props.todo} <span onClick={() => this.removeTodo()} className="remove"><strong>x</strong></span>
      </li>
    );
  }
}

export default Item;
