import './ad-block.css';
// import staff from '../../assets/images/5ff92dab70c13a002257189c_optimized.webp';
import PropTypes from 'prop-types';
const AdBlock = (props) => {
    //  adBlockStyle, btnStyle
    const { title, description, btnText, image } = props;

    return (
        <div className="ad-block">
            <div className="ad-block-info">
                <h2 className="ad-block-title">{title}</h2>
                <p className="ad-block-description">{description}</p>
                <a className="ad-block-btn" href="#">
                    {btnText}
                </a>
            </div>
            <img
                className="ad-block-img"
                src={require(`../../assets/images/${image}`)}
                alt="some alt"
            />
        </div>
    );
};

AdBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string,
    image: PropTypes.string
    // styleBtn: PropTypes.object
    // adBlockStyle: PropTypes.object,
    // btnStyle: PropTypes.object
};

export default AdBlock;
