import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    
    const {title, handleDelete, handleEdit} = this.props;

    return (
      
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

        <h6> {title} </h6>
        <div>
        <span className="mx-2 text-success btn" onClick={handleEdit}>
          <i className="fas fa-pen"> Edit </i>
        </span>

        <span className="mx-2 text-danger btn" onClick={handleDelete}>
          <i className="fas fa-trash"> Trash</i>
        </span>
        </div>
        </li>
    )
  }
}
