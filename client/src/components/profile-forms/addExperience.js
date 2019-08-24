import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addExperience } from '../../actions/action-profile';

const AddExperience = ({ addExperience, history }) => {

    console.log('====================================');
    console.log(history);
    console.log('====================================');
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        title,
        company,
        location,
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
                ເພີ່ມປະສົບການການທຳງານ
            </h1>
            <p className="lead">
                ເພີ່ມອີ່ຫຍັງຈັກຢ່າງ
            </p>
            <form className="form" onSubmit={ e => {
                e.preventDefault();
                addExperience(formData, history);
            }}>
                <div className="form-group">
                    <input type="text" placeholder="ຕຳແໜ່ງ" name="title" required value={title} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ບໍລິສັດ" name="company" required value={company} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ທີ່ຕັ້ງ" name="location" required value={location} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>ເລີ່ມທຳງານຕັ້ງແຕ່</h4>
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
                        placeholder="ໜ້າວຽກທີ່ໄດ້ຖືກມອບໝາຍ"
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

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}



export default connect(null, { addExperience })(AddExperience);
