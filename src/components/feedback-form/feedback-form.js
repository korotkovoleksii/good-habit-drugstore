import { useState } from 'react';
import './feedback-form.css';
import PropTypes from 'prop-types';
// import RatingStars from '../rating-stars/rating-stars';
import { Rating } from 'react-simple-star-rating';
import { v4 as uuidv4 } from 'uuid';

const FeedBackForm = ({
    phderName,
    phderSurname,
    phderEmail,
    phderNumberPhone,
    phderFeedbackText,
    ratingLabel,
    arrDepartment,
    approveText,
    onCancel
}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');

    const [feedbackText, setFeedbackText] = useState('');

    const [department, setDepartment] = useState(arrDepartment[0]);
    const [approveShare, setApproveShare] = useState(false);
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        const domain = process.env.REACT_APP_DOMAIN;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: uuidv4(),
                name: name,
                surname: surname,
                email: email,
                'number-phone': numberPhone,
                'feedback-text': feedbackText,
                department: department,
                rating: rating
            })
        };
        fetch(`${domain}/feedback-list`, requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
        console.log(' Submit send feedback to server');
        console.log('flshjkghaklsdjfgjksaklqqqqq');
        e.preventDefault();
        onCancel();
    };
    const handleRating = (rate) => {
        setRating(rate / 10);
        // Some logic
    };
    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-text"
                    placeholder={phderName}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <input
                    placeholder={phderSurname}
                    className="input-text"
                    type="text"
                    value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value);
                    }}
                />

                <input
                    placeholder={phderEmail}
                    className="input-text"
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    placeholder={phderNumberPhone}
                    className="input-text"
                    type="text"
                    value={numberPhone}
                    onChange={(e) => {
                        setNumberPhone(e.target.value);
                    }}
                />
                <textarea
                    className="feedback-text input-text"
                    name="description"
                    placeholder={phderFeedbackText}
                    value={feedbackText}
                    onChange={(e) => {
                        setFeedbackText(e.target.value);
                    }}
                ></textarea>
                <section className="department-select-section">
                    <label htmlFor="form-department-select">
                        {'department'}
                    </label>
                    <select
                        id="form-department-select"
                        className="form-select"
                        name="select"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        {arrDepartment.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <section className="approve-section">
                    <input
                        type="checkbox"
                        checked={approveShare}
                        onChange={(e) => {
                            setApproveShare(e.target.checked);
                        }}
                    />
                    <label htmlFor=""> {approveText}</label>
                </section>
                <section className="rating">
                    <p>{ratingLabel}</p>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={30}
                        allowHalfIcon
                        transition
                        fillColor="orange"
                        emptyColor="gray"
                        className="rating"
                    />
                </section>
                <input type="submit" value={'Отправить'} />
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
