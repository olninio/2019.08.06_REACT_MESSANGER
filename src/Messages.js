import React from 'react'

import {getMessages, addMessage, deleteMessage} from './messagesService'

class Messages extends React.Component {
  state = {
    messageToSend: '',
    messages: []
  }

  componentDidMount() {
    this.loadMessages() 
  }

  loadMessages = () => {
    getMessages()
      .then(messages => this.setState({
        messages: messages
      }))
  }
  onMessageToSendChanged = (event) => {
    this.setState({
      messageToSend: event.target.value
    })
  }

  onMessageSend = () => {
    const newMessage = {
      text: this.state.messageToSend,
      
    }

    addMessage(newMessage)
      .then(() => this.loadMessages())
  }

  onMessageDelete = (messageKey) => {
    deleteMessage(messageKey).then(() => this.loadMessages())
  }


  render() {
    return (
      <div>

        <div>
          <input
            value={this.state.messageToSend}
            onChange={this.onMessageToSendChanged}
          />
          <button
            onClick={this.onMessageSend}
          >
            SEND
          </button>
        </div>

        <div>
          {
            this.state.messages.map(
              message => (
                <div
                  key={message.key}
                >
                  <button
                    onClick = {() => this.onMessageDelete(message.key)}
                  >
                    X
                  </button>
                  {' '}
                  {message.text}
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}

export default Messages