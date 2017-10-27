import React from 'react'

export default class LogoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
        this.changeLogInState = this.changeLogInState.bind(this)
    }

    handleLogout() {
        global.FB.logout(response => {
            localStorage.clear()
            console.log('Logout!')
        })
        this.changeLogInState()
    }

    changeLogInState() {
        this.props.onLoggedIn(false)
    }

    render() {
        return (
            <button onClick={this.handleLogout}>
                Logout
            </button>
        )
    }
}