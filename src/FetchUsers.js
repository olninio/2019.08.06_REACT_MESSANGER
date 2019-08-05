import React from 'react'

class FetchUsers extends React.Component {
  state = {
    users: [],
    searchPhrase: ''
  }

  componentDidMount(){
    fetch('https://randomuser.me/api?results=10')
      .then(r => r.json())
      .then(data =>  this.setUsers(data.results))
  }

  changeSearchPhrase = (event) => this.setState({
    searchPhrase: event.target.value
  })

  setUsers = (newUsers) => this.setState({
    users: newUsers
  })

  render(){
    return(
      <div>
        <input 
          value={this.state.searchPhrase}
          onChange={this.changeSearchPhrase}
        />
        {
          this.state.users
          .filter(
            user => `${user.name.first} ${user.name.last}`.includes(this.state.searchPhrase)
          )
          .map(
            user => (
              <div
                key={user.email}
              >
                {user.name.first} {user.name.last}
              </div>
            )
          )
        }
      </div>
    )
  }
}
export default FetchUsers