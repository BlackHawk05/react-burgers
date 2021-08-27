import React from 'react'
import lang from 'sample.lang'
import PropTypes from 'prop-types'

const Profile = props => {

  const { avatar, name, handleLogOut } = props
  return (
    <div className="border-bottom pb-1">
      <div className="list-inline-item user-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="list-inline-item">
        {name}
      </div>
      <div className="float-right mt-2">
        <button className="btn btn-danger" onClick={() => handleLogOut()}>{lang.logOut}</button>
      </div>
    </div>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleLogOut: PropTypes.func.isRequired
}

export default Profile
