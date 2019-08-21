import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        conpassword: ''
    });

    const { name, email, password, conpassword } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    console.log(formData);

    const onSubmit = async e => {

        e.preventDefault();

        if (e.target.password.value !== e.target.conpassword.value) {
            console.log(e.target.password.value);
            console.log(e.target.conpassword.value);
            console.log("Passwords do not match");
        } else {
            const newUser = {
                name,
                email,
                password
            }

            try {
                
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);

                console.log('====================================');
                console.log(body);
                console.log('====================================');

                const res = await axios.post('http://localhost:5000/api/user/create', body, config);

                console.log('====================================');
                console.log('SEND TO BACKEND');
                console.log('====================================');

            } catch (error) {

                console.log(error);
            }
        }
    };

    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign In</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Sign In Your Account
                </p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="email"
                            placeholder="Email Address"
                            name="email"
                            onChange={e => onChange(e)}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Password"
                            name="password"
                            minLength={6}
                            onChange={e => onChange(e)}
                            value={password}
                        />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        defaultValue="Sign In"
                    />
                </form>
                <p className="my-1">
                    Already have an account? <Link to="/register">Sign Up</Link>
                </p>
            </section>

        </Fragment>
    );
}

export default Login;