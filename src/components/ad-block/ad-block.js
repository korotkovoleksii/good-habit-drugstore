import PropTypes from 'prop-types';
import Button from '../button/button';
import './ad-block.css';

const AdBlock = (props) => {
    const { title, description, btnText, image, style, isRight, link } = props;
    let classAdBlock = `container ad-block ${style['ad-block'].class}`;
    let classTitle = `ad-block-title ${style['title']?.class}`;
    classAdBlock += isRight ? ' row-reverse' : '';

    return (
        <div className={classAdBlock}>
            <div className="ad-block-info">
                <h2 className={classTitle}>{title}</h2>
                <p className="ad-block-description">{description}</p>
                <Button
                    title={btnText}
                    style={style.button}
                    link={link}
                ></Button>
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
    image: PropTypes.string,
    styel: PropTypes.object,
    isRight: PropTypes.bool,
    link: PropTypes.string
};

export default AdBlock;
