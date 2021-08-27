import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import AddBurgerForm from './AddBurgerForm'
import BurgersList from './BurgersList'
import lang from 'sample.lang'
import PropTypes from 'prop-types'
import SingIn from 'components/Auth/SingIn'
import Profile from './Profile'
import firebase from  'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class AdminMenu extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    loadSampleBurgers: PropTypes.func,
    editBurger: PropTypes.func,
    onAddBurger: PropTypes.func,
    delBurger: PropTypes.func,
  }

  state = {
    user: '',
    avatar: '',
    name: ''
  }

  handleSingIn = (user) => {
    this.setState({
      user: user.email,
      avatar: user.photoURL,
      name: user.displayName
    })
  }

  handleLogOut = async () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: '' })
    }).catch((error) => {
      console.log('singOutError', error)
    });

  }

  render() {

    const {burgers, editBurger, onAddBurger, loadSampleBurgers, delBurger} = this.props

    return (
      <SingIn user={this.state.user} handleSingIn={this.handleSingIn}>
        <div className="flex-fill w-20 pe-md-1">
          <div className="text-center"><h4>{lang.adminMenu}</h4></div>
          {this.state.user ?
            <Profile avatar={this.state.avatar} name={this.state.name} handleLogOut={this.handleLogOut}/> :
            null
          }
          <BurgersList burgers={burgers} editBurger={editBurger} delBurger={delBurger}/>
          <AddBurgerForm onAddBurger={onAddBurger}/>
          <button className="btn btn-primary" onClick={() => loadSampleBurgers()}>{lang.loadBurgers}</button>
        </div>
      </SingIn>
    )
  }
}

export default AdminMenu