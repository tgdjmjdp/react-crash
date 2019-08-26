import React from 'react'
import Moment from 'react-moment'

const ProfileExperience = ({
    experience: {
        company,
        title,
        location,
        to,
        from
    }
}) => {
    return (
        <div>
            <h3 className="text-dark">
                {company}
            </h3>
            <p>
                <strong>
                    ທີ່ຕັ້ງ: {location}
                </strong>
            </p>
            <p>
                <Moment format="DD-MM-YYYY">
                    {from}
                </Moment>
                &nbsp;ເຖິງ&nbsp;
                {
                    !to ? 'ປະຈຸບັນ' :
                        <Moment format="DD-MM-YYYY">
                            {to}
                        </Moment>
                }
            </p>
            <p>
                <strong>
                    ຕຳແໜ່ງ: {title}
                </strong>
            </p>
        </div>
    )
}

ProfileExperience.propTypes = {

}

export default ProfileExperience
