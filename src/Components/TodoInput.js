import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {

    const { item, handleChange, handleSubmit, edit } = this.props;

    return (
      <div className="card-body card">

        <form onSubmit={handleSubmit}>
          <div className="input-group">

            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange}></input>

            <button type="submit"
              className={
                edit ?
                  "btn btn-block btn-success mt-2" :
                  "btn btn-block btn-primary mt-2"
              }
            >
              {edit ? "Edit" : "Add"}
            </button>

          </div>
        </form>
      </div>
    )
  }
}
