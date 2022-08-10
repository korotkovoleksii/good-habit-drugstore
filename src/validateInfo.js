export default function validateInfo(values, valuesBlur) {
    let errors = {};
    //name
    if (valuesBlur.name) {
        if (!values.name.trim()) {
            errors.name = 'Name required';
        } else if (values.name.length <= 2) {
            errors.name = 'Name short';
        }
    }
    //second name
    if (valuesBlur.surname) {
        if (!values.surname.trim()) {
            errors.surname = 'second name required';
        } else if (values.surname.length < 2) {
            errors.surname = 'Second name short';
        }
    }
    //email
    if (valuesBlur.email) {
        if (!values.email) {
            errors.email = 'Email required';
        } else if (!/@/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
    }
    //feedback text
    if (valuesBlur.feedbackText) {
        if (!values.feedbackText.trim()) {
            errors.feedbackText = 'Feedback required';
        } else if (values.feedbackText.length < 100) {
            errors.feedbackText = 'FeedBack short';
        } else if (values.feedbackText.length > 150) {
            errors.feedbackText = 'Feedback long';
        }
    }
    // rating
    if (valuesBlur.rating) {
        if (!values.rating) {
            errors.rating = 'Rating required';
        }
    }
    //department
    if (valuesBlur.department) {
        if (!values.department) {
            errors.department = 'Department required';
        }
    }
    //number phone
    if (valuesBlur.numberPhone) {
        if (values.numberPhone.length < 12) {
            errors.numberPhone = 'Number phone invalid';
        }
    }
    //approveShare
    if (valuesBlur.approveShare) {
        if (!values.approveShare) {
            errors.approveShare = 'Approve';
        }
    }

    return errors;
}
