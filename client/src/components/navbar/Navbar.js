import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <ul className="navbar-nav mr-auto">
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
                <form className=" form-inline">
                    <div className="md-form my-0">
                        {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> */}
                    </div>
                </form>
            </div>
        </nav>
    );
}


export default Navbar;
