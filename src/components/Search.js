import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label style={{transform: 'translateY(-0.3rem)'}}>Search:</Label> <input />
      </form>
    )
  }
}

export default Search
