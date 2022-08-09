import { useState, useEffect } from 'react';

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
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setErrors(validate(values));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
    };
    useEffect(() => {
        setErrors(validate(values));
    }, [values]);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
