import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../spinner/spinner'
import ProfileTop from './profileTop'
import ProfileAbout from './profileAbout'
import ProfileExperience from './profileExperience'
import { getProfileById } from '../../actions/action-profile'

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
            {
                profile === null || loading ? <Spinner /> :
                    <Fragment>
                        <Link to='/profiles' className="btn btn-light">
                            ກັບໄປຍັງໜ້າລາຍການ
                    </Link>
                        {
                            auth.isAuthenicated &&
                            auth.loading === false &&
                            auth.user._id === profile.user._id &&
                            (
                                <Link to="/edit-profile" className="btn btn-dark">
                                    ແກ້ໄຂຂໍ້ມູນ
                                </Link>
                            )
                        }
                        <div className="profile-grid my-1">
                            <ProfileTop profile={profile} />
                            <ProfileAbout profile={profile} />
                            <div className="profile-exp bg-white p-2">
                                <h2 className="text-primary">
                                    ປະຫວັດການທຳງານ
                            </h2>
                                {
                                    profile.experience.length > 0 ? (
                                        <Fragment>
                                            {
                                                profile.experience.map(experience => (
                                                    <ProfileExperience
                                                        key={experience._id}
                                                        experience={experience} />
                                                ))
                                            }
                                        </Fragment>
                                    ) : (
                                            <h4>
                                                ບໍ່ພົບປະຫວັດການທຳງານ
                                            </h4>
                                        )
                                }
                            </div>
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProp, { getProfileById })(Profile)
