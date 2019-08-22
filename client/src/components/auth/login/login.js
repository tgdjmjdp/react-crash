import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    console.log(formData);

    const onSubmit = async e => {

        e.preventDefault();

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