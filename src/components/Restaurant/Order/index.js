import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import OrderList from './OrderList'
import OrderCost from './OrderCost'
import PropTypes from 'prop-types'

class Order extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    delFromOrder: PropTypes.func,
    minusFromOrder: PropTypes.func,
  }

  render() {
    const {order, burgers, delFromOrder, minusFromOrder} = this.props

    return (
      <div className="flex-fill bg-gradient2 mx-2 w-20">
        <div className="w-20">
          <div className="position-fixed">
            <div className="text-center w-20"><h4>{lang.userOrder}</h4></div>
            <OrderList order={order} burgers={burgers} delFromOrder={delFromOrder} minusFromOrder={minusFromOrder}/>
            <OrderCost order={order} burgers={burgers}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Order