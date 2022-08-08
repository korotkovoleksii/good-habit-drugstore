import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

import { useEffect, useState } from 'react';

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
                        addError({ maxLength: 'too much characters' });
                    } else {
                        setMaxLengthErr(false);
                        remoteError('maxLength');
                    }
                    break;
                }
                case 'isEmail': {
                    const re = /@/;
                    if (!re.test(String(value).toLowerCase())) {
                        setEmailError(true);
                        addError({ isEmail: 'email not valid' });
                    } else {
                        setEmailError(false);
                        remoteError('isEmail');
                    }
                    break;
                }
                case 'isEmpty': {
                    if (value) {
                        setIsEmpty(false);
                    } else {
                        setIsEmpty(true);
                    }
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

    const checkValid = () => {
        if (!valid.inputValid) {
            setStyleInput(styleInput + ' ' + classStyleError);
        } else {
            setStyleInput(classStyle);
        }
    };

    const onChange = (e) => {
        if ('checked' in e.target) {
            setValue(e.target.checked);
        }
        if ('value' in e.target) {
            setValue(e.target.value);
        }

        setDirty(true);
        checkValid();
    };

    const onBlur = () => {
        setDirty(true);
        checkValid();
    };

    return {
        setValue,
        value,
        onChange,
        isDirty,
        onBlur,
        styleInput,
        checkValid,
        ...valid
    };
};

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
    const name = useInput(
        '',
        { isEmpty: true, minLength: 2 },
        'input-text',
        'input-error'
    );
    const surname = useInput(
        '',
        { isEmpty: true, minLength: 2 },
        'input-text',
        'input-error'
    );
    const email = useInput(
        '',
        { isEmpty: true, isEmail: true },
        'input-text',
        'input-error'
    );
    const feedbackText = useInput(
        '',
        { isEmpty: true, minLength: 2 },
        'feedback-text input-text',
        'input-error'
    );
    const approveShare = useInput(
        false,
        { isEmpty: true },
        'some-class',
        'input-checkbox-error'
    );
    const department = useInput(
        arrDepartment[0],
        { isEmpty: true },
        'form-select',
        'input-error'
    );

    const [numberPhone, setNumberPhone] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        if (
            email.inputValid &&
            name.inputValid &&
            approveShare.inputValid &&
            department.inputValid
        ) {
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
                    department: department.value,
                    rating: rating
                })
            };
            fetch(`${domain}/feedback-list`, requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data));

            e.preventDefault();
            onCancel();
        }
        email.checkValid();
        name.checkValid();
        surname.checkValid();
        feedbackText.checkValid();
        approveShare.checkValid();
        department.checkValid();
        e.preventDefault();
    };

    const handleRating = (rate) => {
        setRating(rate * 2);
    };

    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <section className="input-section">
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
                <section className="input-section">
                    <input
                        placeholder={phderSurname}
                        className={surname.styleInput}
                        type="text"
                        value={surname.value}
                        onChange={(e) => surname.onChange(e)}
                        onBlur={(e) => surname.onBlur(e)}
                    />
                    {surname.isDirty && !surname.inputValid && (
                        <p className="error-label">{surname.getTextError()}</p>
                    )}
                </section>
                <section className="input-section">
                    <input
                        placeholder={phderEmail}
                        className={email.styleInput}
                        type="text"
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={(e) => email.onBlur(e)}
                    />
                    {email.isDirty && !email.inputValid && (
                        <p className="error-label">{email.getTextError()}</p>
                    )}
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
                        value={numberPhone}
                        onChange={(phone) => setNumberPhone(phone)}
                    ></PhoneInput>
                </section>
                <section className="input-section">
                    <textarea
                        placeholder={phderFeedbackText}
                        className={feedbackText.styleInput}
                        type="text"
                        value={feedbackText.value}
                        onChange={(e) => feedbackText.onChange(e)}
                        onBlur={(e) => feedbackText.onBlur(e)}
                    ></textarea>
                    {feedbackText.isDirty && !feedbackText.inputValid && (
                        <p className="error-label">
                            {feedbackText.getTextError()}
                        </p>
                    )}
                </section>
                <section className="department-select-section">
                    <label htmlFor="form-department-select">
                        {'department'}
                    </label>
                    <select
                        id="form-department-select"
                        className={department.styleInput}
                        name="select"
                        value={department.value}
                        onChange={(e) => department.onChange(e)}
                        onBlur={() => department.onBlur()}
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
                        className={approveShare.styleInput}
                        checked={approveShare.value}
                        onChange={(e) => approveShare.onChange(e)}
                        onBlur={(e) => approveShare.onBlur(e)}
                    />
                    <label htmlFor=""> {approveText}</label>
                </section>

                <section className="rating">
                    <p>{ratingLabel}</p>

                    <ReactStars
                        count={5}
                        onChange={handleRating}
                        value={rating}
                        size={20}
                        isHalf={true}
                        activeColor="#ffd700"
                    />
                </section>

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
