import './ad-block.css';
import PropTypes from 'prop-types';

const AdBlock = (props) => {
    const { title, description, btnText, image, style, isRight } = props;

    const classAdBlock = isRight
        ? 'container ad-block  row-reverse'
        : 'container ad-block';
    return (
        <div className={classAdBlock}>
            <div className="ad-block-info">
                <h2 className="ad-block-title">{title}</h2>
                <p className="ad-block-description">{description}</p>
                <a className={`ad-block-btn ${style.button.class}`} href="#">
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
};

export default AdBlock;
