import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import RatingStars from '../rating-stars/rating-stars';
import { Rating } from 'react-simple-star-rating';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import './feedback-form.css';
const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthErr, setMinLengthErr] = useState(false);
    const [maxLengthErr, setMaxLengthErr] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [listErrors, setListErrors] = useState([]);

    const addError = (error) => {
        const rez = listErrors.find((item) => {
            if (Object.keys(item)[0] === Object.keys(error)[0]) {
                return item;
            }
        });

        if (!rez) {
            setListErrors([...listErrors, error]);
        }
    };
    const remoteError = (keyError) => {
        const newList = listErrors.filter((item) => {
            if (Object.keys(item)[0] !== keyError) {
                return item;
            }
        });
        setListErrors([...newList]);
    };
    const getTextError = () => {
        return listErrors.length ? Object.values(listErrors[0])[0] : '';
    };

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength': {
                    if (value.length < validations[validation]) {
                        setMinLengthErr(true);
                        addError({ minLength: 'not enough characters' });
                    } else {
                        setMinLengthErr(false);
                        remoteError('minLength');
                    }

                    break;
                }

                case 'maxLength': {
                    if (value.length > validations[validation]) {
                        setMaxLengthErr(true);
                    } else {
                        setMaxLengthErr(false);
                    }

                    break;
                }

                case 'isEmpty': {
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                }

                case 'isEmail': {
                    const re = /@/;

                    re.test(String(value).toLowerCase())
                        ? setEmailError(false)
                        : setEmailError(true);
                    break;
                }
            }
        }
    }, [value]);
    useEffect(() => {
        if (isEmpty || minLengthErr || maxLengthErr || emailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthErr, maxLengthErr, emailError]);
    return {
        isEmpty,
        minLengthErr,
        maxLengthErr,
        emailError,
        inputValid,
        getTextError,
        listErrors
    };
};

const useInput = (initialValue, validations, classStyle, classStyleError) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);
    const [styleInput, setStyleInput] = useState(classStyle);
    const cheack = () => {
        if (!valid.inputValid) {
            setStyleInput(styleInput + ' ' + classStyleError);
        } else {
            setStyleInput(classStyle);
        }
    };
    const onChange = (e) => {
        setValue(e.target.value);
        setDirty(true);
        cheack();
    };
    const onBlur = () => {
        setDirty(true);
        cheack();
    };

    return {
        value,
        onChange,
        isDirty,
        onBlur,
        styleInput,
        cheack,
        ...valid
    };
};
const FeedBackForm = ({
    phderName,
    phderSurname,
    phderEmail,
    // phderNumberPhone,
    phderFeedbackText,
    ratingLabel,
    arrDepartment,
    approveText,
    onCancel
}) => {
    const name = useInput(
        '',
        { isEmpty: true, minLength: 2 },
        'input-text',
        'input-text-error'
    );
    const surname = useInput(
        '',
        { isEmpty: true, minLength: 2 },
        'input-text',
        'input-text-error'
    );
    const email = useInput(
        '',
        { isEmpty: true, isEmail: true },
        'input-text',
        'input-text-error'
    );
    const feedbackText = useInput(
        '',
        { isEmpty: true },
        'feedback-text input-text',
        'input-text-error'
    );

    // const [name, setName] = useState('');

    const [numberPhone, setNumberPhone] = useState('');

    // const [feedbackText, setFeedbackText] = useState('');

    const [department, setDepartment] = useState(arrDepartment[0]);
    const [approveShare, setApproveShare] = useState(false);
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        if (email.inputValid) {
            const domain = process.env.REACT_APP_DOMAIN;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: uuidv4(),
                    name: name.value,
                    surname: surname.value,
                    email: email.value,
                    'number-phone': numberPhone,
                    'feedback-text': feedbackText.value,
                    department: department,
                    rating: rating
                })
            };
            fetch(`${domain}/feedback-list`, requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data));

            e.preventDefault();
            onCancel();
        }

        email.cheack();
        e.preventDefault();
    };
    const handleRating = (rate) => {
        setRating(rate / 10);
    };
    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <section>
                    <input
                        placeholder={phderName}
                        className={name.styleInput}
                        type="text"
                        value={name.value}
                        onChange={(e) => name.onChange(e)}
                        onBlur={(e) => name.onBlur(e)}
                    />
                    {name.isDirty && !name.inputValid && (
                        <p className="error-label">{name.getTextError()}</p>
                    )}
                </section>

                <input
                    placeholder={phderSurname}
                    className={surname.styleInput}
                    type="text"
                    value={surname.value}
                    onChange={(e) => surname.onChange(e)}
                    onBlur={(e) => surname.onBlur(e)}
                />

                <input
                    placeholder={phderEmail}
                    className={email.styleInput}
                    type="text"
                    value={email.value}
                    onChange={(e) => email.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                />
                {email.isDirty && email.minLengthErr && (
                    <p className="error-label"> not valid email</p>
                )}

                <section>
                    <PhoneInput
                        inputStyle={{
                            width: '100%',
                            backgroundColor: '#f5f6fa'
                        }}
                        country={'ua'}
                        onlyCountries={['ua']}
                        masks={{ ua: '(...) ..-..-..' }}
                        value={numberPhone}
                        onChange={(phone) => setNumberPhone(phone)}
                    ></PhoneInput>
                </section>
                <textarea
                    // name="description"
                    placeholder={phderFeedbackText}
                    className={feedbackText.styleInput}
                    type="text"
                    value={feedbackText.value}
                    onChange={(e) => feedbackText.onChange(e)}
                    onBlur={(e) => feedbackText.onBlur(e)}
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
