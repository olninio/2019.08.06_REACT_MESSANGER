import React from 'react'

class Messages extends React.Component {
  state = {
    messageToSend: '',
    messages: []
  }

  onMessageToSendChanged = (event) => {
    this.setState({
      messageToSend: event.target.value
    })
  }
  render () {
    return(
      <div>
        <input
          value = {this.state.messageToSend}
          onChange = {}
        />
        <button
          onClick = {() => console.log(this.state.messageToSend)}
        >
          SEND 
        </button>
      </div>
      )
  }
}

export default Messages