import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button.Component';
import FormInput from '../FormInput/FormInput';
import './FormLayout_SignIn'

const defaultFormField = {
    username:"",
    email: "",
    password: "",
};
function FormLayoutSignUp() {
  
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password,username } = formField;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    };
    return (
        <div>
            <form>
                <FormInput
                    required
                    type="username"
                    label="UserName"
                    name="username"
                    onChange={handleChange}
                    value={username}

                />





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
                    Already Have an Account?
                    <span>
                        <Link to="/auth">SignIn</Link>
                    </span>
                </p>
            </div>
        </div>
  )
}

export default FormLayoutSignUp