import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
/* import axios from 'axios'; */
import { connect } from'react-redux';
import { setAlert } from '../../../actions/action-alert';
import { register } from '../../../actions/action-auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenicated }) => {
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

    const onSubmit = async e => {

        e.preventDefault();

        if (e.target.password.value !== e.target.conpassword.value) {
            setAlert('Password not matched', 'danger');
        } else {

            register({ name, email, password });

        }
    };

    if(isAuthenicated){
        return <Redirect to="/dashboard"></Redirect>
    }

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
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </section>

        </Fragment>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenicated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenicated: state.auth.isAuthenicated
});

export default connect(mapStateToProps, { setAlert, register })(Register);