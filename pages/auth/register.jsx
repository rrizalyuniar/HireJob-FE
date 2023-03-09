import React from 'react'
import Register from '../../components/Auth/Register'
import Side from '../../components/Auth/Side'

const register = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <Side />
            <Register />
        </div>
    </div>
  )
}

export default register