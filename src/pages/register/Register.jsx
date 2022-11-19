import React from 'react'
import FormLayoutSignUp from '../../Component/Form/FormLayout_SignUp'
import Confess from '../login/Confess'
import './Register.scss'
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <Confess/>
        </div>
        <div className="right">
          <h1>Sign Up</h1>
          <FormLayoutSignUp />
        </div>
      </div>
    </div>
  )
}

export default Register