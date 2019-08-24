import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addEducation } from '../../actions/action-profile';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: '',
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    return (
        <Fragment>
            <h1 className="large text-primary">
                ເພີ່ມປະຫວັດການສຶກສາ
            </h1>
            <p className="lead">
                ລະບຸລາຍລະອຽດຕ່າງໆ
            </p>
            <form className="form" onSubmit={ e => {
                e.preventDefault();
                addEducation(formData, history);
            }}>
                <div className="form-group">
                    <input type="text" placeholder="ໂຮງຮຽນ ຫຼື ສະຖາບັນທີ່ສຶກສາ" name="school" required value={school} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ລະດັບການສຶກສາ" name="degree" required value={degree} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ຂະໜະ" name="fieldofstudy" required value={fieldofstudy} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>ເລີ່ມຮຽນຕັ້ງແຕ່</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current}
                        onChange={e => {
                            setFormData({ ...formData, current: !current });
                            toggleDisabled(!toDateDisabled);
                        }} />
                        ຈົນເຖິງປັດຈຸບັນ
                    </p>
                </div>
                <div className="form-group">
                    <h4>ຈົນເຖິງ</h4>
                    <input
                        type="date"
                        name="to"
                        value={to}
                        onChange={e => onChange(e)}
                        disabled={toDateDisabled ? 'disabled' : ''}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="ສຶ່ງທີ່ໄດ້ຮຽນຮູ້ຈາກການສຶກສາ"
                        value={description}
                        onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    ກັບຄືນ
                </Link>
            </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}



export default connect(null, { addEducation })(AddEducation);
