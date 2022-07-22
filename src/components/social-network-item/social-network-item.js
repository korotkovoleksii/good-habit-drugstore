import './social-network-item.css';

const SocialNetworkItem = (props) => {
    const { link, pathImage, alt } = props;

    return (
        <div>
            <a href={link}>
                <img src={pathImage} alt={alt} />
            </a>
        </div>
    );
};

export default SocialNetworkItem;
