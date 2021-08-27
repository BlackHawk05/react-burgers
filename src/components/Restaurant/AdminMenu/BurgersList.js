import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import EditBurgerForm from './EditBurgerForm'
import PropTypes from 'prop-types'

class BurgersList extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    editBurger: PropTypes.func,
    delBurger: PropTypes.func,
  }

  state = {
    showForm: {}
  }

  showForm = (key) => {
    const showForm = {...this.state.showForm}
    showForm[key] = showForm[key] ? false : true
    this.setState({
      showForm: showForm
    })
  }

  render() {
    const {burgers, editBurger, delBurger} = this.props

    const burgerKeys = Object.keys(burgers).reverse()

    const burgersElements = burgerKeys.map(burgerKey => {

        const burger = burgers[burgerKey]

        return (
          <li key={burgerKey} className="article-list__li">
            <div className="my-xl-2 mw-25">
              <div className="bg-grey border rounded-3 p-2 clearfix ovfh">
                <div className="text-or d-xl-inline-block"><h4>{burger.name}</h4></div>
                <div className="float-right">
                  <button className="btn btn-danger" onClick={() => this.showForm(burgerKey)}>
                    {this.state.showForm[burgerKey] ? lang.hideBtn : lang.editBtn}
                  </button>
                </div>
              </div>
              <div>
                {this.state.showForm[burgerKey] &&
                <EditBurgerForm burger={burger} burgerKey={burgerKey} editBurger={editBurger}
                                showForm={this.state.showForm} delBurger={delBurger}
                />
                }
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