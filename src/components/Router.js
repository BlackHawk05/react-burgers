import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChooseRestaurant from './ChooseRestaurant/index'
import Restaurant from './Restaurant/index'
import NotFound from './NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChooseRestaurant} />
        <Route path="/restaurant/:restaurantId" component={Restaurant} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router