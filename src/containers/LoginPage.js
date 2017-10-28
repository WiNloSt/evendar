import React from 'react'
import Button from '../components/Button'
import { getEvents, getAllTargetEvents } from '../utils/services'
import { withRouter } from "react-router-dom"

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedin')
    }
    this.loginHandle = this.loginHandle.bind(this)
    this.logoutHandle = this.logoutHandle.bind(this)
  }

  loginHandle() {
    const self = this
    global.FB.login(() => { }, {
      scope: 'email,user_events,rsvp_event'
    })
    global.FB.getLoginStatus((response) => {
      console.log('response', response)
      localStorage.setItem('accessToken', response.authResponse.accessToken)
      localStorage.setItem('expiresIn', response.authResponse.expiresIn)
      localStorage.setItem('signedRequest', response.authResponse.signedRequest)
      localStorage.setItem('loginStatus', response.status)
      localStorage.setItem('isLoggedin', true)
      console.log('sfd;laf;ldskfsd;lfk')
      self.props.history.push("/")
      getEvents()
      getAllTargetEvents().then((response) => {
        console.log('response', response)
      })
    })
    this.setState({
      isLoggedIn: true
    })
  }

  logoutHandle() {
    global.FB.logout()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('signedRequest')  
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('isLoggedin')
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div style={{display: 'flex', width: '100%', height:'100%', margin: 0, padding: 0, alignItems: 'center', justifyContent: 'center'}}>
        <Button buttonHandle={this.loginHandle} >
          Login with Facebook
        </Button>
      </div>
    )
  }
}

export default withRouter(LoginPage)
