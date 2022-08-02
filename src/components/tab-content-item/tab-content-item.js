import './tab-content-item.css';
import Button from '../button/button';
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
export default TabContentItem;
