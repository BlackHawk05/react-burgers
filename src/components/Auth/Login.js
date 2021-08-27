import React from 'react'
import PropTypes from 'prop-types'
import cfg from 'config'
import lang from 'sample.lang'

const Login = props => {

  return (
    <div className="w-20 pe-md-1">
      <div className="text-center">
        <h4>{lang.auth}</h4>
      </div>
      {(props.user && !cfg.admins.includes(props.user)) ?
        <div className="text-danger mb-2 px-2 bg-grey border rounded-3">{`${lang.accessDenied} ${props.user}`}</div> :
        null
      }
      <div>
        <button className="col-12 btn btn-info" onClick={() => props.authUser()}>Войти через GitHub</button>
      </div>
    </div>
  )
}

Login.propTypes = {
  user: PropTypes.string,
  authUser: PropTypes.func.isRequired
}

export default Login