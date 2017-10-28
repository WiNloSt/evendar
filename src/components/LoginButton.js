import React from 'react'
import {getEvents,getAllTargetEvents} from '../utils/services'

export default class LoginButton extends React.Component {
    constructor(props) {
        super(props)
        this.changeLogInState = this.changeLogInState.bind(this)
        this.loginHandle = this.loginHandle.bind(this)
    }

    changeLogInState() {
        this.props.onLoggedIn(true)
    }

    loginHandle() {
        global.FB.login(() => { }, {
          scope: 'email,user_events'
        })
        global.FB.getLoginStatus((response)=> {
          console.log('response',response)
          localStorage.setItem('accessToken', response.authResponse.accessToken)
          localStorage.setItem('expiresIn', response.authResponse.expiresIn)
          localStorage.setItem('signedRequest', response.authResponse.signedRequest)
          localStorage.setItem('loginStatus', response.status)
          getEvents()
          getAllTargetEvents().then((response)=>{
            console.log('response',response)
          })
        })
        this.changeLogInState()
    }

    render() {
        return (
            <button onClick={this.loginHandle}>
                Login
            </button>
        )
    }
}
