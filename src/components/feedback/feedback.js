import './feedback.css';
import feedbackImg from '../../assets/images/feedback.jpeg';
import Button from '../button/button';
import Modal from '../modal/modal';
import FeedBackForm from '../feedback-form/feedback-form';
import { useState } from 'react';
const FeedBack = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const handleSubmit = () => {
        console.log(' Submit send feedback to server');
        setIsOpen(false);
    };
    const handleCancel = () => {
        console.log('Cansel function!');
        setIsOpen(false);
    };
    return (
        <>
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
                            title="FeedBack"
                            isOpen={isOpen}
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        >
                            <FeedBackForm></FeedBackForm>
                        </Modal>
                    </div>
                    <img
                        className="feedback-img"
                        src={feedbackImg}
                        alt="feedback img"
                    />
                </div>
            </div>
        </>
    );
};
export default FeedBack;
