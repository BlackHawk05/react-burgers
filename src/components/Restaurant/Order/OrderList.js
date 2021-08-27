import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

class OrderList extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    delFromOrder: PropTypes.func,
    minusFromOrder: PropTypes.func,
  }

  render() {
    const {order, burgers, delFromOrder, minusFromOrder} = this.props

    if (Object.keys(burgers).length === 0) return null;

    const orderKeys = Object.keys(order)

    const orderElements = orderKeys.map(key => {

      let orderElement

      if (!burgers[key]) return <div></div>

      if (burgers[key].status !== 'disable') {

        const summa = parseFloat(order[key])*parseFloat(burgers[key].cost)

        orderElement =
          <li key={key} className="article-list__li order-list nav-tabs me-xl-2">
            <div className="rel ovfh">
              <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={order[key]} timeout={{enter: 300, exit: 300}}>
                  <span className="abs count-order">{order[key]}</span>
                </CSSTransition>
              </TransitionGroup>
              <span className="ms-md-35">{` x ${burgers[key].name} `}</span>
              <span>{summa} ₽</span>
              <button className="btn btn-danger py-sm-0 float-right ms-lg-2" onClick={() => delFromOrder(key)}>X</button>
              <button className="btn btn-danger py-sm-0 float-right" onClick={() => minusFromOrder(key)}>-</button>
            </div>
          </li>
      }
      else {
        orderElement =
          <li key={key} className="article-list__li nav-tabs clearfix rel pt-md-1">
            <div className="me-lg-45 bg-danger py-md-1">{`${burgers[key].name} ${lang.burgerIsDisable}`}</div>
            <button className="btn-del-disable-order btn btn-danger py-sm-0 float-right ms-lg-2" onClick={() => delFromOrder(key)}>X</button>
          </li>
      }

      return (
        <CSSTransition classNames="order" key={key} timeout={{enter: 300, exit: 300}}>
          {orderElement}
        </CSSTransition>
      )
    })

    if (orderElements.length > 0) {

      return (
        <div className="ps-2 ovfh">
          <TransitionGroup component="ul">{orderElements}</TransitionGroup>
        </div>
      )
    }

    return (
      <div className="ps-2 ovfh">
        <TransitionGroup component="ul"></TransitionGroup>
      </div>
    )
  }
}

export default OrderList