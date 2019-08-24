import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/action-profile';

const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(
        exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td className="hide-sm">{exp.title}</td>
                <td>
                    <Moment format="DD/MM/YYYY">
                        {exp.from}
                    </Moment> - {
                        exp.to === null ? ('ປັດຈຸບັນ') : (
                            <Moment format="DD/MM/YYYY">
                                {exp.to}
                            </Moment>
                        )
                    }
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteExperience(exp._id)}>
                        ລົບ
                    </button>
                </td>
            </tr>
        )
    )
    return (
        <Fragment>
            <h1 className="my-2">ປະຫວັດການທຳງານ</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ບໍລິສັດ</th>
                        <th>ປີ</th>
                        <th>ຈັດການ</th>
                    </tr>
                </thead>
                <tbody>
                    {experiences}
                </tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience)
