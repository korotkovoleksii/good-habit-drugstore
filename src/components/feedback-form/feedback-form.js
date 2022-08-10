import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

// import { useEffect, useState } from 'react';
import validate from '../../validateInfo';
import useForm from '../../useForm';

import 'react-phone-input-2/lib/style.css';
import './feedback-form.css';

const FeedBackForm = ({
    phderName,
    phderSurname,
    phderEmail,
    phderFeedbackText,
    ratingLabel,
    arrDepartment,
    approveText,
    onCancel
}) => {
    const submitF = (feedbackData) => {
        const domain = process.env.REACT_APP_DOMAIN;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: uuidv4(),
                name: feedbackData.name,
                surname: feedbackData.surname,
                email: feedbackData.email,
                'number-phone': feedbackData.numberPhone,
                'feedback-text': feedbackData.feedbackText,
                department: feedbackData.department,
                rating: feedbackData.rating
            })
        };
        fetch(`${domain}/feedback-list`, requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
        console.log('hello world');
        onCancel();
    };
    const {
        handleBlur,
        handleChangeInput,
        handleChangeCheckbox,
        handleSubmit,
        handleChangePhoneInput,
        handleChangeStars,
        values,
        errors
    } = useForm(submitF, validate);
    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="input-section">
                    <input
                        placeholder={phderName}
                        className="input-text"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChangeInput}
                        onBlur={handleBlur}
                    />
                    {errors.name && (
                        <p className="error-label">{errors.name}</p>
                    )}
                </div>
                <div className="input-section">
                    <input
                        className="input-text"
                        placeholder={phderSurname}
                        type="text"
                        name="surname"
                        value={values.surname}
                        onChange={handleChangeInput}
                        onBlur={handleBlur}
                    />
                    {errors.surname && (
                        <p className="error-label">{errors.surname}</p>
                    )}
                </div>

                <div className="input-section">
                    <input
                        className="input-text "
                        placeholder={phderEmail}
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChangeInput}
                        onBlur={handleBlur}
                    />
                    {errors.email && (
                        <p className="error-label">{errors.email}</p>
                    )}
                </div>
                <div className="input-section">
                    <PhoneInput
                        inputStyle={{
                            width: '100%',
                            backgroundColor: '#f5f6fa'
                        }}
                        country={'ua'}
                        onlyCountries={['ua']}
                        masks={{ ua: '(...)..-..-..' }}
                        value={values.numberPhone}
                        onChange={(value, country, e) => {
                            e.target.name = 'numberPhone';
                            console.log(value);
                            return handleChangePhoneInput(e, value);
                        }}
                        onBlur={handleBlur}
                    ></PhoneInput>
                    {errors.numberPhone && (
                        <p className="error-label">{errors.numberPhone}</p>
                    )}
                </div>
                <div className="input-section">
                    <textarea
                        name="feedbackText"
                        placeholder={phderFeedbackText}
                        type="text"
                        value={values.feedbackText}
                        onChange={handleChangeInput}
                        onBlur={handleBlur}
                        className="feedback-text input-text"
                    ></textarea>
                    {errors.feedbackText && (
                        <p className="error-label">{errors.feedbackText}</p>
                    )}
                </div>
                <div className="department-select-section">
                    <section className="input-block-wrap">
                        <select
                            id="form-department-select"
                            name="department"
                            value={values.department}
                            onChange={handleChangeInput}
                            onBlur={handleBlur}
                        >
                            <option value="" selected disabled hidden>
                                Choose here
                            </option>
                            {arrDepartment.map((item, index) => {
                                return (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor="form-department-select">
                            {'department:'}
                        </label>
                    </section>
                    {errors.department && (
                        <p className="input-block-error">{errors.department}</p>
                    )}
                </div>
                <div className="approve-section">
                    <section className="input-block-wrap">
                        <input
                            type="checkbox"
                            checked={values.approveShare}
                            onChange={handleChangeCheckbox}
                            name="approveShare"
                            onBlur={handleBlur}
                        />
                        <label htmlFor=""> {approveText}</label>
                    </section>
                    {errors.approveShare && (
                        <p className="input-block-error">
                            {errors.approveShare}
                        </p>
                    )}
                </div>
                <div className="rating">
                    <section className="input-block-wrap">
                        <ReactStars
                            count={5}
                            value={values.rating}
                            onChange={(newRating) => {
                                handleChangeStars('rating', newRating * 2);
                            }}
                            onBlur={handleBlur}
                            size={20}
                            isHalf={true}
                            activeColor="#ffd700"
                        />
                    </section>
                    <p>{ratingLabel}</p>
                    {errors.rating && (
                        <p className="input-block-error">{errors.rating}</p>
                    )}
                </div>

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
