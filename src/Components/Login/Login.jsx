import React from 'react';
import { Inputs } from '../Inputs/Inputs';
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="head">Nest</div>
        <div className="content">
            <div className="left">
                <div className="top">
                  <h1>Welcome back</h1>
                  <h4>Login to your account</h4>
                </div>
                <Inputs title="Email Address" onChange={""} placeholder="youremail@example.com" />
                <Inputs title="Password" onChange={""} placeholder="*****************" />
                <button>Login</button>
                <div>Forgot password?</div>
                <div className="create">
                  <div>Are you a new user?</div>
                  <div>Create an Account</div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  )
}

export default Login