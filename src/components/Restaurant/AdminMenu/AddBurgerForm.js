import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from 'sample.lang'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

class AddBurgerFrom extends React.Component {

  static propTypes = {
    onAddBurger: PropTypes.func,
  }

  state = {
    errGlow: {}
  }

  nameRef = React.createRef()
  costRef = React.createRef()
  statusRef = React.createRef()
  descRef = React.createRef()
  imgRef = React.createRef()

  render() {
    return (
     <div className="mt-xl-3">
       <form onSubmit={this.createBurger}>
         <input ref={this.nameRef} className={`form-control mb-md-1${this.state.errGlow['name'] ? ` errGlow` : ``}`}
                name="name" type="text" placeholder={lang.name} autoComplete="off" maxLength="25"
         />
         <input ref={this.costRef} className={`form-control mb-md-1${this.state.errGlow['cost'] ? ` errGlow` : ``}`}
                name="cost" type="text" placeholder={lang.price} autoComplete="off" maxLength="10"
         />
         <select ref={this.statusRef} className={`form-control mb-md-1${this.state.errGlow['status'] ? ` errGlow` : ``}`}
                 name="status">
           <option value="enable">{lang.statusEnable}</option>
           <option value="disable">{lang.statusDisable}</option>
         </select>
         <textarea ref={this.descRef} className={`form-control mb-md-1${this.state.errGlow['desc'] ? ` errGlow` : ``}`}
                   name="desc" placeholder={lang.desc}
         />
         <input ref={this.imgRef} className={`form-control mb-md-1${this.state.errGlow['img'] ? ` errGlow` : ``}`}
                name="img" type="text" placeholder={lang.image} autoComplete="off"
         />
         <button type="submit" className="btn btn-primary col-12 mb-md-3">+ {lang.btnAddMenu}</button>
       </form>
     </div>
    )
  }

  createBurger = (event) => {
    event.preventDefault()
    //console.log(event.target.value)
    const burger = {
      id: uniqid(),
      name: this.nameRef.current.value,
      cost: parseFloat(this.costRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      img: this.imgRef.current.value,
    }

    let err = false
    const errGlow = {...this.state.errGlow}

    for (let key in burger) {
      if (!burger[key]) {
        err = true
        errGlow[key] = true
      }
      else delete(errGlow[key])
    }

    if (Object.keys(errGlow).length > 0 || errGlow !== this.state.errGlow) {
      this.setState({
        errGlow: errGlow
      })
    }

    if (err) return;

    this.props.onAddBurger(burger);
    event.currentTarget.reset();
  }
}

export default AddBurgerFrom