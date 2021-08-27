import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import PropTypes from 'prop-types'

class OrderCost extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
  }

  render() {
    const {order, burgers} = this.props

    if (Object.keys(burgers).length === 0) return null;

    const orderKeys = Object.keys(order)

    const orderSum = orderKeys.reduce((prevSum, key) => {
      if (!burgers[key]) return prevSum
      const summ = parseFloat(order[key])*parseFloat(burgers[key].cost)
      if (burgers[key].status !== 'disable') {
        return prevSum + summ
      }
      return prevSum
    }, 0)

    let result = false

    if (orderSum > 0) {

      const shippingCost = orderSum < 500 ? 350 : 99
      const totalSum = orderSum+shippingCost

      let shippingSumElement =
          <div className="nav-tabs py-md-2 me-xl-2">
            <div>
              {`${lang.shipping}: `}
              {shippingCost === 99 ? <span className="fireGlow">{shippingCost}</span> : shippingCost} ₽
            </div>
            <div className="small">
              {`${orderSum < 500 ? `Закажите еще на ${(500-orderSum)}₽ для доставки за 99 ₽` : ``}`}
            </div>
          </div>

      let totalSumElement = <div className="py-md-2">{`${lang.totalSum}: ${totalSum} ₽`}</div>

      result =
        <div>
          {shippingSumElement}
          {totalSumElement}
        </div>
    }
    else {
      result = <div className="order-empty">{lang.emptyCart}</div>
    }

    return (
      <div className="ps-2 ovfh">
        {result}
      </div>
    )
  }
}

export default OrderCost