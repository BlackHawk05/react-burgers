import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import BurgersList from './BurgersList'
import PropTypes from 'prop-types'

class UserMenu extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    addToOrder: PropTypes.func
  }

  render() {
    const {burgers, addToOrder} = this.props
    return (
      <div>
        <ul><BurgersList burgers={burgers} addToOrder={addToOrder}/></ul>
      </div>
    )
  }
}

export default UserMenu