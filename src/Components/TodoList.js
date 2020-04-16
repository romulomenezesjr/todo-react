import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items,clearList, handleDelete, handleEdit} = this.props

    return (
      <ul className="list-group my-5"> 
      <h3 className="text-capitalize text-center"> Todo List</h3>

        {
          items.map(i => {
            return (
            <TodoItem 
              key={i.id} 
              title={i.title}
              handleDelete={ ()=> handleDelete(i.id)}
              handleEdit = {()=> handleEdit(i.id)}
              >
              </TodoItem>)
          })
        
        }

      <button className="btn btn-danger btn-block text-capitalize" onClick={clearList}>Clear List</button>
      </ul>
      
    )
  }
}
