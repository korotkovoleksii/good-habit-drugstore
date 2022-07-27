import PropTypes from 'prop-types';
import './feature.css';

const Feature = (props) => {
    const { title, description, imageName, alt } = props;
    let srcImg = null;
    try {
        srcImg = require(`../../assets/images/${imageName}`);
    } catch (e) {
        console.log(e);
    }
    return (
        <div className="feature">
            {srcImg && <img src={srcImg} alt={alt} className="icon-feature" />}
            <section>
                <p className="title-feature">{title}</p>
                <p className="description-feature">{description}</p>
            </section>
        </div>
    );
};
Feature.propsType = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageName: PropTypes.string,
    alt: PropTypes.string
};

export default Feature;
