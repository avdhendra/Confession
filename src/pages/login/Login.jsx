import React from "react";

import FormLayoutSignIn from "../../Component/Form/FormLayout_SignIn";

import Confess from "./Confess";
import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <Confess />
        </div>
        <div className="right">
          <h1>Login</h1>
          <FormLayoutSignIn />
        </div>
      </div>
    </div>
  );
}

export default Login;
