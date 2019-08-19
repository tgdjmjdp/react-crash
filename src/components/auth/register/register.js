import React, { Componentม, Fragment, useState } from 'react';

const Register = props => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...FormData, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2){
            console.log("Passwords do not match");
        }else{
            console.log(formData)
        }
    };
 
    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Create Your Account
                </p>
                <form className="form" onSubmit= {e => onsubmit(e)}>
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
                        <input type="password"
                            placeholder="Password"
                            name="password"
                            minLength={6}
                            onChange={e => onChange(e)}
                            value={password}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength={6}
                            onChange={e => onChange(e)}
                            value={password2}
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