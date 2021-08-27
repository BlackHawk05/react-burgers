import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import UserMenu from './UserMenu/index'
import Order from './Order/index'
import AdminMenu from './AdminMenu/index'
import restaurants from '../ChooseRestaurant/sample.restaurants'
import NotFound from '../NotFound'
import burgers from './UserMenu/sample.burgers'
import { db } from 'initFirebase'

class Restaurant extends React.Component {

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount () {
    const { params } = this.props.match

    const localStorageRef = localStorage.getItem(params.restaurantId)
    if (localStorageRef)
      this.setState({ order: JSON.parse(localStorageRef) })

    this.ref = db.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    })
    //const baseRef = db.ref('burgers')
    //const newBaseRef = baseRef.push()
  }
  componentWillUnmount () {
    db.removeBinding(this.ref)
  }

  componentDidUpdate () {
    const { params } = this.props.match
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
  }

  delBurger = (key) => {
    const burgers = {...this.state.burgers}
    burgers[key] = null //метод delete не работает с базой
    const order = {...this.state.order}
    delete order[key]
    this.setState({ burgers, order })
  }

  loadSampleBurgers = () => {
    this.setState({
      burgers
    })
  }

  addBurger = (burger) => {
    const burgers = {...this.state.burgers}
    burgers[`burger${Date.now()}`] = burger
    this.setState({ burgers })
  }

  addToOrder = (key) => {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }

  delFromOrder = (key) => {
    const order = {...this.state.order}
    delete order[key]
    this.setState({ order })
  }
  minusFromOrder = (key) => {
    const order = {...this.state.order}
    if (order[key] === 1)
      delete order[key]
    else order[key] = order[key] - 1
    this.setState({ order })
  }

  editBurger = (key, burger) => {
    const burgers = {...this.state.burgers}
    burgers[key] = burger
    this.setState({ burgers })
  }

  render() {
    const restaurant = restaurants[this.props.match.params.restaurantId]
    if (restaurant !== undefined) restaurant.url = this.props.match.params.restaurantId;

    return (
      <div>
        {restaurant !== undefined ?
          <div className="d-flex">
            <div className="flex-fill">
              <Header title={restaurant.name}/>
              <UserMenu burgers={this.state.burgers} addToOrder={this.addToOrder}/>
            </div>
            <Order order={this.state.order} burgers={this.state.burgers} delFromOrder={this.delFromOrder}
                   minusFromOrder={this.minusFromOrder}
            />
            <AdminMenu onAddBurger={this.addBurger} burgers={this.state.burgers} editBurger={this.editBurger}
                       loadSampleBurgers={this.loadSampleBurgers} delBurger={this.delBurger}
            />
          </div> :
          <NotFound />}
      </div>
    )
  }
}

export default Restaurant