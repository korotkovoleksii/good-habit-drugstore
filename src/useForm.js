import { useState, useEffect, useRef } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        feedbackText: '',
        approveShare: false,
        department: '',
        numberPhone: '',
        rating: 0
    });
    const [valuesBlur, setValuesBlur] = useState({
        name: false,
        surname: false,
        email: false,
        feedbackText: false,
        approveShare: false,
        department: false,
        numberPhone: false,
        rating: false
    });
    const [errors, setErrors] = useState({});
    const isSubmitting = useRef(false);
    const handleChangeStars = (key, value) => {
        setValues({
            ...values,
            [key]: value
        });
        setValuesBlur({
            ...valuesBlur,
            [key]: true
        });
    };
    const handleChangePhoneInput = (e, value) => {
        const { name } = e.target;

        setValues({
            ...values,
            [name]: value
        });
        setValuesBlur({
            ...valuesBlur,
            [name]: true
        });
    };
    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
        setValuesBlur({
            ...valuesBlur,
            [name]: true
        });
    };
    const handleChangeCheckbox = (e) => {
        const { name, checked } = e.target;
        setValues({
            ...values,
            [name]: checked
        });
        setValuesBlur({
            ...valuesBlur,
            [name]: true
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        console.log(name);
        setValuesBlur({
            ...valuesBlur,
            [name]: true
        });
    };
    const clearData = () => {
        setValues({
            name: '',
            surname: '',
            email: '',
            feedbackText: '',
            approveShare: false,
            department: '',
            numberPhone: '',
            rating: 0
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const copy = { ...valuesBlur };
        Object.keys(copy).forEach((item) => {
            console.log(item);
            return (copy[item] = true);
        });

        setValuesBlur(copy);
        isSubmitting.current = true;
    };
    useEffect(() => {
        console.log(valuesBlur);
        setErrors(validate(values, valuesBlur));
    }, [values, valuesBlur]);
    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length !== 0) {
            isSubmitting.current = false;
        }
        if (Object.keys(errors).length === 0 && isSubmitting.current) {
            callback(values);
            clearData();
        }
    }, [errors]);
    return {
        handleChangeInput,
        handleChangeCheckbox,
        handleChangePhoneInput,
        handleChangeStars,
        handleSubmit,
        values,
        handleBlur,
        errors
    };
};

export default useForm;
