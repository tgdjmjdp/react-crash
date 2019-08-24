import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';
import { getCurrentProfile } from '../../actions/action-profile';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="larg text-primary">
            Dashboard
        </h1>
        <p className="lead"></p>
        {profile !== null ? (
            <Fragment><p>HAS</p></Fragment>
        ) : (
                <Fragment>
                    <p>ເຈົ້າຍັງບໍ່ມີໂປຣໄຟລ໌</p>
                    <Link to='/create-profile' className="btn btn-primary my-1">
                        <span>ສ້າງໂປຣໄຟລ໌</span>
                    </Link>
                    </Fragment>
            )}
        <p>ຍິນດີຕ້ອນຮັບ {user && user.name}</p>
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
