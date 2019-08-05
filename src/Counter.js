import React from 'react'

class Counter extends React.Component {
  state = {
    number: 0
  } 

  handleChange = (delta) => this.setState({
    number: this.state.number + delta
  })

  render(){
    return(
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => this.handleChange(1)}
        >
          +
        </button>
        <button
          onClick={() => this.handleChange(5)}
        >
          + 5
        </button>
        <button
          onClick={() => this.handleChange(-1)}
        >
          -
        </button>
      </div>
    )
  }
}
export default Counter