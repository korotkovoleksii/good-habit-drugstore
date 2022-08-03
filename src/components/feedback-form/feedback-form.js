import { useState } from 'react';
import './feedback-form.css';
const FeedBackForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');
    // const [rating, setRating] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    //set first depart
    const [department, setDepartment] = useState('');
    const [approveShare, setApproveShare] = useState(false);
    return (
        <div className="feedback">
            <form
                className="feedback-form"
                onSubmit={() => console.log('fjsldk')}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <input
                    placeholder="Surname"
                    className="input-text"
                    type="text"
                    value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value);
                    }}
                />

                <input
                    placeholder="Email"
                    className="input-text"
                    type="text"
                    value={numberPhone}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    placeholder="Number Phone"
                    className="input-text"
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setNumberPhone(e.target.value);
                    }}
                />
                <textarea
                    className="feedback-text input-text"
                    name="description"
                    placeholder="feedback"
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
                        <option value="customerDepartment">
                            customer department
                        </option>
                        <option value="supportDepartment">
                            support department
                        </option>
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
                    <label htmlFor=""> {'approve'}</label>
                </section>
            </form>
        </div>
    );
};

export default FeedBackForm;
