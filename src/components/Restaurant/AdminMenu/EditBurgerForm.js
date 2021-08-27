import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import PropTypes from 'prop-types'

class EditBurgerForm extends React.Component {

  static propTypes = {
    burgers: PropTypes.object,
    burgerKey: PropTypes.string,
    delBurger: PropTypes.func,
  }

  handleInputChange = (e) => {
    const burger = {...this.props.burger}
    burger[e.currentTarget.name] = e.currentTarget.value
    this.props.editBurger(this.props.burgerKey, burger)
  }

  handleKeypress = (e) => {
    if (e.charCode === 13) {
      this.handleInputChange(e)
    }
  }

  render() {

    const {burger, delBurger, burgerKey} = this.props

    return (
      <div className="mt-xl-1 mb-xl-3 bg-grey p-2 rounded-3">
        <form onSubmit={(e) => {e.preventDefault()}}>
          <input className={`form-control mb-md-1 small`} name="name" type="text" placeholder={lang.name}
                 autoComplete="off" defaultValue={burger.name} onBlur={this.handleInputChange}
                 onKeyPress={this.handleKeypress}  maxLength="25"
          />
          <input className={`form-control mb-md-1 small`} name="cost" type="text" placeholder={lang.price}
                 autoComplete="off" defaultValue={burger.cost} onBlur={this.handleInputChange}
                 onKeyPress={this.handleKeypress}  maxLength="10"
          />
          <select className={`form-control mb-md-1 small`} name="status" defaultValue={burger.status}
                  onChange={this.handleInputChange}
          >
            <option value="enable">{lang.statusEnable}</option>
            <option value="disable">{lang.statusDisable}</option>
          </select>
          <textarea className={`form-control mb-md-1 small`} name="desc" placeholder={lang.desc} defaultValue={burger.desc}
                    onBlur={this.handleInputChange} onKeyPress={this.handleKeypress}
          />
          <input className={`form-control mb-md-1 small`} name="image" type="text" placeholder={lang.image}
                 autoComplete="off" defaultValue={burger.img} onBlur={this.handleInputChange}
                 onKeyPress={this.handleKeypress}
          />
        </form>
        <button className="btn btn-danger col-12" onClick={() => delBurger(burgerKey)}>
          {lang.delBurgerBtn}
        </button>
      </div>
    )
  }
}
//{`${(burger.status == 'enable' || !burger.status) && true}`
//{`${burger.status == 'disable' && true}`}
export default EditBurgerForm