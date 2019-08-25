import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/action-auth';

const Navbar = ({ auth: { isAuthenicated, loading }, logout }) => {
    const authLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/profiles">
                    <span>
                        Developers
                    </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/dashboard">
                    <span>
                        Dashboard
                    </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={logout} className="nav-link" to='/register'>
                    <i className="i.fas.fa.sign-out-authLinks"></i>
                    <span className="">
                        Logout
                    </span>
                </Link>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/profiles">
                    <span>
                        Developers
                    </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/register'>
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/login'>
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/post'>
                    Post
                            </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/profile'>
                    Profile
                            </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <Link className="navbar-brand" to='/'>
                Navbar
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                {!loading && (<Fragment>{isAuthenicated ? authLinks : guestLinks}</Fragment>)}
                <form className=" form-inline">
                    <div className="md-form my-0">
                        {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> */}
                    </div>
                </form>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
