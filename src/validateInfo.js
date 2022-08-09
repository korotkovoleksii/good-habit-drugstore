export default function validateInfo(values) {
    let errors = {};
    //name
    if (!values.name.trim()) {
        errors.name = 'Name required';
    } else if (values.name.length <= 2) {
        errors.name = 'Name short';
    }
    //second name
    if (!values.surname.trim()) {
        errors.surname = 'second name required';
    } else if (values.surname.length < 2) {
        errors.name = 'Second name short';
    }
    //email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/@/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    //feedback text
    if (!values.feedbackText.trim()) {
        errors.feedbackText = 'Feedback required';
    } else if (values.feedbackText.length < 100) {
        errors.feedbackText = 'FeedBack short';
    } else if (values.feedbackText.length > 150) {
        errors.feedbackText = 'Feedback long';
    }
    // rating
    if (!values.rating) {
        errors.rating = 'Rating required';
    }
    //department
    if (!values.department) {
        errors.department = 'Department required';
    }
    //number phone
    if (values.numberPhone.length < 12) {
        errors.numberPhone = 'Number phone invalid';
    }
    //approveShare
    if (!values.approveShare) {
        errors.approveShare = 'Approve';
    }

    return errors;
}
