import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/action-profile';
import DashboardAction from './dashboardAction';
import Experience from './experience';
import Education from './education';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    deleteAccount,
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <p>ຍິນດີຕ້ອນຮັບ {user && user.name}</p>
        <h1 className="larg text-primary">
            ໜ້າຫຼັກ
        </h1>
        <p className="lead"></p>
        {profile !== null ? (
            <Fragment>
                <DashboardAction></DashboardAction>
                <Experience experience={ profile.experience }></Experience>
                <Education education={ profile.education }></Education>
                <div className="my-2">
                    <button 
                    className="btn btn-danger"
                    onClick={() => deleteAccount()}
                    >
                        ລົບຜູ້ໃຊ້ງານນີ້
                    </button>
                </div>
            </Fragment>
        ) : (
                <Fragment>
                    <p>ເຈົ້າຍັງບໍ່ມີໂປຣໄຟລ໌</p>
                    <Link to='/create-profile' className="btn btn-primary my-1">
                        <span>ສ້າງໂປຣໄຟລ໌</span>
                    </Link>
                    </Fragment>
            )}
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { deleteAccount, getCurrentProfile })(Dashboard);
