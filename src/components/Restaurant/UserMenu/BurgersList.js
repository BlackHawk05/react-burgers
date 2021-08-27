import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import PropTypes from 'prop-types'

class BurgersList extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    addToOrder: PropTypes.func
  }

  render() {
    const {burgers, addToOrder} = this.props
    const burgerKeys = Object.keys(burgers).reverse()

    const burgersElements = burgerKeys.map(burgerKey => {
        const burger = burgers[burgerKey]
        const burgerImg = {
          backgroundImage: `url(${require(`./img/${burger.img}`).default})`
        }
        return (
          <li key={burgerKey} className="article-list__li">
            <div className="bg-light border rounded-3 p-2 m-sm-2">
              <div className="d-flex dropstart">
                <div className="burgerImg flex-fill minw-10 mw-15" style={burgerImg}></div>
                <div className="vert-t flex-fill mw-25 rel">
                  <div className="text-or menu-burger-name"><h4>{burger.name}</h4></div>
                  <div className="text-dark">{burger.desc}</div>
                  {burger.status === 'disable' ?
                    <div className="burger-disable">
                      <button className="orderBurger fs-3" disabled={true}>{lang.burgerDisabled}</button>
                    </div> :
                    <div className="rel">
                      <button className="btn btn-danger col-12" onClick={() => addToOrder(burgerKey)}>
                        {lang.orderBurger}
                      </button>
                    </div>
                  }
                </div>
                <div className="burgerPrice text-nowrap text-green"><b>{burger.cost} ₽</b></div>
              </div>
            </div>
          </li>
        )
      })


    return (
      <div>
        {burgersElements}
      </div>
    )
  }
}

export default BurgersList