import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/action-profile';

const Education = ({ education, deleteEducation }) => {

    const educations = education.map(
        edu => (
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td className="hide-sm">{edu.title}</td>
                <td>
                    <Moment format="DD/MM/YYYY">
                        {edu.from}
                    </Moment> - {
                        edu.to === null ? ('ປັດຈຸບັນ') : (
                            <Moment format="DD/MM/YYYY">
                                {edu.to}
                            </Moment>
                        )
                    }
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteEducation(edu._id)}>
                        ລົບ
                    </button>
                </td>
            </tr>
        )
    )
    return (
        <Fragment>
            <h1 className="my-2">ປະຫວັດການສຶກສາ</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ໂຮງຮຽນ</th>
                        <th>ປີ</th>
                        <th>ຈັດການ</th>
                    </tr>
                </thead>
                <tbody>
                    {educations}
                </tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
