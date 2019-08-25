import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../spinner/spinner'
import { getProfiles } from '../../actions/action-profile'
import ProFileItem from '../profiles/proFileItem';

const ProFiles = ({
    getProfiles,
    profile: { profiles, loading }
}) => {

    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <Fragment>
            { 
                loading ? <Spinner/> : 
                    <Fragment>
                        <h1 className="large text-primary">
                            ພະນັກງານທັງໝົດ
                        </h1>
                        <p className="lead">
                            ລາຍລະອຽດຕ່າງໆ
                        </p>
                        <div className="profiles">
                            {
                                profiles.length > 0 ? ( 
                                    profiles.map(profile => (
                                        <ProFileItem key={ profile._id } profile={ profile } ></ProFileItem>
                                    ))
                                ) 
                                :
                                <h4>
                                    ບໍ່ພົບຂໍ້ມູນຂອງພະນັກງານ
                                </h4>
                            }
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

ProFiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateTpProps = state => ({
    profile: state.profile
});

export default connect(mapStateTpProps, { getProfiles })(ProFiles)
