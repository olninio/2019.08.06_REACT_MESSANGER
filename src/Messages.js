import React from 'react'

class Messages extends React.Component {
  state = {
    messageToSend: '',
    messages: [
      {
        text: 'Hello 1',
        key: 'xxx'
      },
      {
        text: 'Hello 2',
        key: 'yyy'
      },
      {
        text: 'Hello 3',
        key: 'zzz'
      },
    ]
  }

  onMessageToSendChanged = (event) => {
    this.setState({
      messageToSend: event.target.value
    })
  }

  onMessageSend = () => {
    const newMessage = {
      text: this.state.messageToSend,
      key: Date.now()
    }
    this.setState({
      messages: this.state.messages.concat({newMessage})
    })
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
            onClick={() => console.log(this.state.messageToSend)}
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