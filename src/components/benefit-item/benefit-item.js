import PropTypes from 'prop-types';
import './benefit-item.css';

const BenefitItem = (props) => {
    const { title, description, alt, imageName, nameClass } = props;
    let srcImg = null;
    try {
        srcImg = require(`../../assets/images/${imageName}`);
    } catch (e) {
        console.log(e);
    }
    return (
        <div className={`benefit-item ${nameClass}`}>
            <img className="benefit-img" src={srcImg} alt={alt} />
            <p className="benefit-title">{title}</p>
            <p className="benefit-description">{description}</p>
        </div>
    );
};

BenefitItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string,
    nameClass: PropTypes.string
};

export default BenefitItem;
