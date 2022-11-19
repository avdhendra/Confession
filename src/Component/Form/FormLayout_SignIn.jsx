import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.Component";
import FormInput from "../FormInput/FormInput";
import "./FormLayout_SignIn.scss";
const defaultFormField = {
  email: "",
  password: "",
};

function FormLayoutSignIn() {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div>
      <form>
        <FormInput
          required
          type="email"
          label="Email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          required
          type="password"
          label="Password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <Button type="submit">Sign Up</Button>
      </form>
      <div className="account">
        <p>
          Don't Have Account?
          <span>
            <Link to="/auth/register">SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default FormLayoutSignIn;
