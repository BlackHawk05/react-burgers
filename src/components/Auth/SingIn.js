import React from 'react'
import Login from './Login'
import cfg from 'config'
import firebase from  'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { firebaseApp } from 'initFirebase'
import PropTypes from 'prop-types'

class SingIn extends React.Component {

  static propTypes = {
    user: PropTypes.string,
    handleSingIn: PropTypes.func,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({user})
      }
    })
  }

  authHandler = async (authData) => {
    this.props.handleSingIn(authData.user.providerData[0])
  }

  authUser = () => {
    const authProvider = new firebase.auth.GithubAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  render() {
    if (!this.props.user || !cfg.admins.includes(this.props.user)) {
      return <Login authUser={this.authUser} user={this.props.user}/>
    }

    return this.props.children
  }
}

export default SingIn