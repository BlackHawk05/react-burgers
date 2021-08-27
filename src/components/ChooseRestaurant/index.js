import React, { useState } from 'react'
import 'css/bootstrap.css'
import lang from 'sample.lang'
import RestaurantsList from './RestaurantsList'
import PropTypes from 'prop-types'

const ChooseRestaurant = props => {

  const [ display, toogleDisplay ] = useState(false)
  //const [ name, setName ] = useState('')
  const [ url, setUrl ] = useState('')

  const showList = () => {
    toogleDisplay(!display)
  }

  const selectRest = (restaurant) => {
    const { url } = restaurant
    //setName(name)
    setUrl(url)
  }

  const loadRest = () => {
    props.history.push(`/restaurant/${url}`)
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-gradient rounded-3 p-5">
        <div className="fs-4 fw-bold curs-p text-navajowhite" onClick={showList}>
          {lang.chooseRest}
        </div>
        <div className="fs-2 fw-bold curs-p text-center fireGlow2" onClick={showList}>
          Hot Burgers
        </div>
        <RestaurantsList display = {display} url = {url}
                         onSelectRest = {selectRest} />
        {(url !== '' && display) &&
        <button className="btn btn-primary mt-2"
                onClick={loadRest}
        >
          {lang.chooseBtn}
        </button>}
      </div>
    </div>
  )
}

ChooseRestaurant.propTypes = {
  history: PropTypes.object
}

export default ChooseRestaurant