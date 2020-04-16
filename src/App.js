import React, { Component } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from 'uuid';

import "./App.css"

export default class App extends Component {

  state = {
    items: [],
    id: 0,
    input: '',
    editItem: false
  }

  handleChange = (e) => {

    this.setState({
      input: e.target.value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== '') {

      const newItem = {
        id: this.state.id,
        title: this.state.input
      }
      this.setState({
        items: [...this.state.items, newItem],
        input: '',
        id: uuidv4(),
        editItem: false
      })

    }
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find( item => item.id === id);

    this.setState({
      items: filteredItems,
      input : selectedItem.title,
      editItem:true,
      id : id
    })
    
  }

  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-10 mx-auto mt-4 col-md-8">

            <h3 className="text-capitalize text-center"> Todo Input</h3>
            <TodoInput
              item={this.state.input}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
              edit={this.state.editItem}>

            </TodoInput>

            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} >
            </TodoList>

          </div>

        </div>
      </div>


    )
  }
}
