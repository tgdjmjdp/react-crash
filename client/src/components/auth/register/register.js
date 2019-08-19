import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Register = props => {
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

    /* const onChange = (e) => (
        console.log(e.target.name)
    ); */

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

                const res = await axios.post('/api/users', body, config);

                console.log(res.data);
                
            } catch (error) {
                
                console.log(error.response.data);
            }
        }
    };

    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Create Your Account
                </p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Name"
                            name="name"
                            required
                            onChange={e => onChange(e)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            placeholder="Email Address"
                            name="email"
                            onChange={e => onChange(e)}
                            value={email}
                        />
                        <small className="form-text">
                            This site uses Gravatar so if you want a profile image, use a Gravatar email
                        </small>
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
                    <div className="form-group">
                        <input type="text"
                            placeholder="Confirm Password"
                            name="conpassword"
                            minLength={6}
                            onChange={e => onChange(e)}
                            value={conpassword}
                        />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        defaultValue="Register"
                    />
                </form>
                <p className="my-1">
                    Already have an account? <a href="login.html">Sign In</a>
                </p>
            </section>

        </Fragment>
    );
}

export default Register;