import PropTypes from 'prop-types';
import Button from '../button/button';
import './tab-content-item.css';
const TabContentItem = ({ title, price, image, textBtn, link }) => {
    let srcImg = null;
    try {
        srcImg = require(`../../assets/images/${image}`);
    } catch (e) {
        console.log(e);
    }
    return (
        <div className="tab-content-item">
            <img className="tab-content-item-img" src={srcImg} alt="some alt" />
            <p className="tab-content-item-title">{title}</p>
            <p className="tab-content-item-price">{price}</p>
            <Button title={textBtn} link={link}></Button>
        </div>
    );
};
TabContentItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    textBtn: PropTypes.string,
    link: PropTypes.link
};

export default TabContentItem;
