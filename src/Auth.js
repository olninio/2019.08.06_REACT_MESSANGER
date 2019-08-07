// komponent który wyświetla coś dla użytkownika

import React from 'react'

import { isUserLoggedIn, logIn } from './authService'

class Auth extends React.Component {
  state = {
    isUserLoggedIn: isUserLoggedIn()
  }

  render() {
    return (
      this.state.isUserLoggedIn ?
        this.props.children
        :
        <div>
          <button
            onClick={() => {
              logIn('mateusz.choma+1@infoshareacademy.com', '12345678')
                .then(() => this.setState({ isUserLoggedIn: isUserLoggedIn() }))
                .catch(console.log) // handle errors in that way that user will can see them!
            }}
          >
            LOG IN
          </button>
        </div>
    )
  }
}

export default Auth