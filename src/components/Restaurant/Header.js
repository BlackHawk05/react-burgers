import React from 'react'
import 'css/bootstrap.css'
import 'css/style.css'
import lang from '../../sample.lang'
import PropTypes from 'prop-types'

const Header = ({title}) => (
  <div className="header pt-6">
    <div>
      <div><h1 className="headerText fireGlow2">{title}</h1></div>
    </div>
    <div className="headerText2"><h3>{lang.header1} <span className="c-red shad1">#{lang.burgers}</span></h3></div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header