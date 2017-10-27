import React from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.isLoggedIn
                    ? <LogoutButton
                        onLoggedIn={this.props.onLoggedIn}
                    />
                    : <LoginButton
                        onLoggedIn={this.props.onLoggedIn}
                    />
                }
            </div>
        )
    }
}