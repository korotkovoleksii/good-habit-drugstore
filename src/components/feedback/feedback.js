import './feedback.css';
import feedbackImg from '../../assets/images/feedback.jpeg';
import Button from '../button/button';
import Modal from '../modal/modal';
import FeedBackForm from '../feedback-form/feedback-form';
import { useState, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';
const FeedBack = () => {
    const [error, setError] = useState(null);
    const [feedbackFormData, setFeedbackFormData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const domain = process.env.REACT_APP_DOMAIN;
    useEffect(() => {
        // const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/feedback-form-info`)
            .then((response) => {
                return !response.ok ? Promise.reject(error) : response.json();
            })
            .then((data) => {
                setFeedbackFormData(data);
                setIsLoad(true);
            })
            .catch((error) => {
                setError(error);
                setIsLoad(true);
            });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const handleSubmit = () => {
        setIsOpen(false);
    };
    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isLoad && (
                <div className="feed-back-bg">
                    <div className="container feed-back">
                        <div className="feedback-info">
                            <p className="feedback-question">
                                Have Any Questions? Call us 24/7
                            </p>
                            <p className="numberPhone">+1 (234) 567 89 00</p>
                            <p className="feedback-title">FeedBack for Us</p>
                            <p className="feedback-description">
                                You could give complete the form after click the
                                button below and give feedback for us
                            </p>
                            <Button
                                title="Give FeedBack"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openModal();
                                }}
                            ></Button>

                            <Modal
                                title={feedbackFormData.title}
                                isOpen={isOpen}
                                onSubmit={handleSubmit}
                                onCancel={handleCancel}
                                btnTextCancel={
                                    feedbackFormData['text-btn-cancel']
                                }
                                btnTextSubmit={
                                    feedbackFormData['text-btn-submit']
                                }
                            >
                                <FeedBackForm
                                    phderName={
                                        feedbackFormData['name-placeholder']
                                    }
                                    phderSurname={
                                        feedbackFormData['surname-placeholder']
                                    }
                                    phderEmail={
                                        feedbackFormData['email-placeholder']
                                    }
                                    phderNumberPhone={
                                        feedbackFormData[
                                            'number-phone-placeholder'
                                        ]
                                    }
                                    phderFeedbackText={
                                        feedbackFormData['feedback-placeholder']
                                    }
                                    ratingLabel={
                                        feedbackFormData['rating-text']
                                    }
                                    arrDepartment={
                                        feedbackFormData['department']
                                    }
                                    approveText={
                                        feedbackFormData[
                                            'approve-use-data-client'
                                        ]
                                    }
                                ></FeedBackForm>
                            </Modal>
                        </div>
                        <img
                            className="feedback-img"
                            src={feedbackImg}
                            alt="feedback img"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
export default FeedBack;
