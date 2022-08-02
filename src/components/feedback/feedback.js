import './feedback.css';
import feedbackImg from '../../assets/images/feedback.jpeg';
import Button from '../button/button';
const FeedBack = () => {
    return (
        <div className="feed-back-bg">
            <div className="container feed-back">
                <div className="feedback-info">
                    <p className="feedback-question">
                        Have Any Questions? Call us 24/7
                    </p>
                    <p className="numberPhone">+1 (234) 567 89 00</p>
                    <p className="feedback-title">FeedBack for Us</p>
                    <p className="feedback-description">
                        You could give complete the form after click the button
                        below and give feedback for us
                    </p>
                    <Button title="Give FeedBack"></Button>
                </div>
                <img
                    className="feedback-img"
                    src={feedbackImg}
                    alt="feedback img"
                />
            </div>
        </div>
    );
};
export default FeedBack;
