// import { v4 as uuidv4 } from 'uuid';
// import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';
// import ReactStars from 'react-rating-stars-component';

// import { useEffect, useState } from 'react';
import validate from '../../validateInfo';
import useForm from '../../useForm';

import 'react-phone-input-2/lib/style.css';
import './feedback-form.css';

const FeedBackForm = ({
    phderName,
    // phderSurname,
    // phderEmail,
    // phderFeedbackText,
    // ratingLabel,
    // arrDepartment,
    // approveText,
    onCancel
}) => {
    const submitF = () => {
        console.log('hello world');
        onCancel();
    };
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitF,
        validate
    );
    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <section className="input-section">
                    <input
                        placeholder={phderName}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </section>
                {/* <section className="input-section">
                    <input
                        placeholder={phderSurname}
                        type="text"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    {errors.surname && <p>{errors.surname}</p>}
                </section>
                <section className="input-section">
                    <input
                        placeholder={phderEmail}
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </section>

                <section>
                    <PhoneInput
                        inputStyle={{
                            width: '100%',
                            backgroundColor: '#f5f6fa'
                        }}
                        country={'ua'}
                        onlyCountries={['ua']}
                        masks={{ ua: '(...) ..-..-..' }}
                        value={values.numberPhone}
                        onChange={handleChange}
                    ></PhoneInput>
                    {errors.numberPhone && <p>{errors.numberPhone}</p>}
                </section>
                <section className="input-section">
                    <textarea
                        placeholder={phderFeedbackText}
                        type="text"
                        value={values.feedbackText}
                        onChange={handleChange}
                    ></textarea>
                    {errors.feedbackText && <p>{errors.feedbackText}</p>}
                </section>
                <section className="department-select-section">
                    <label htmlFor="form-department-select">
                        {'department'}
                    </label>
                    <select
                        id="form-department-select"
                        name="select"
                        value={values.department}
                        onChange={handleChange}
                    >
                        {arrDepartment.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                    {errors.department && <p>{errors.department}</p>}
                </section>
                <section className="approve-section">
                    <input
                        type="checkbox"
                        checked={values.approveShare}
                        onChange={handleChange}
                    />
                    <label htmlFor=""> {approveText}</label>
                    {errors.approveShare && <p>{errors.approveShare}</p>}
                </section>

                <section className="rating">
                    <p>{ratingLabel}</p>

                    <ReactStars
                        count={5}
                        value={values.rating}
                        onChange={handleChange}
                        size={20}
                        isHalf={true}
                        activeColor="#ffd700"
                    />
                    {errors.rating && <p>{errors.rating}</p>}
                </section> */}

                <input className="send-button" type="submit" value={'Send'} />
            </form>
        </div>
    );
};

FeedBackForm.propTypes = {
    phderName: PropTypes.string,
    phderSurname: PropTypes.string,
    phderEmail: PropTypes.string,
    phderNumberPhone: PropTypes.string,
    phderFeedbackText: PropTypes.string,
    ratingLabel: PropTypes.string,
    arrDepartment: PropTypes.array,
    approveText: PropTypes.string
};

export default FeedBackForm;
