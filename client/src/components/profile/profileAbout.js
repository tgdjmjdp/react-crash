import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: {
            name
        }
    }
}) => {
    return (
        <Fragment>
            <div className="profile-about bg-light">
                {
                    bio && (
                        <div>
                            <h2 className="text-primary">
                                bio of {name}
                            </h2>
                            <p>
                                {bio}
                            </p>
                        </div>
                    )
                }

                <div className="Line"></div>
                <h2 className="text-primary">Skill Set</h2>
                <div className="skills">
                    {
                        skills.map((skill, index) => (
                            <div key={index} className="p-1">
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>

    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout
