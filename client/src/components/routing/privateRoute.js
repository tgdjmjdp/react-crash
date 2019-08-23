import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth: { isAuthenicated, loadig }, ...rest }) => (
    <Route {...rest} render={
        props => !isAuthenicated && !loadig ? (
                <Redirect to='/login' />
            ) : (
                    <Component {...props} />
                )}></Route>
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)
