import React from 'react'
import 'css/bootstrap.css'
import restaurants from './sample.restaurants'
import uniqid from 'uniqid'

class RestaurantsList extends React.Component {

  render() {
    const {display, url, onSelectRest} = this.props
    const keys = Object.keys(restaurants);

    const restElements = keys.map((key) => {
      //console.log('---1', key)
      let restaurant = restaurants[key]
      restaurant.url = key
      return (
        <li className={url === key ? 'curs-p bg-primary' : 'curs-p'}
            key={uniqid()}
            onClick={() => onSelectRest(restaurant)}>
          {restaurant.name}
        </li>
      )
    })

    return (
      <ul className="ms-sm-4">
       {display && restElements}
      </ul>
    )
  }
}

export default RestaurantsList