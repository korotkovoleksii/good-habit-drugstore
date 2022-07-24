import PropTypes from 'prop-types';
import './social-network-item.css';

const SocialNetworkItem = (props) => {
    const { link, nameImage, alt } = props;

    return (
        <div>
            <a href={link}>
                <img
                    className="icon"
                    src={require(`../../assets/images/${nameImage}`)}
                    alt={alt}
                />
            </a>
        </div>
    );
};

SocialNetworkItem.PropTypes = {
    link: PropTypes.string,
    nameImage: PropTypes.string,
    alt: PropTypes.string
};
export default SocialNetworkItem;
