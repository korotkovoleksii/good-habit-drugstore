import './social-network-list.css';
import SocialNetworkItem from '../social-network-item/social-network-item';
import facebookIcon from '../../assets/images/facebook-icon.png';
import instagramIcon from '../../assets/images/instagram-icon.png';
import youtubeIcon from '../../assets/images/youtube-icon.png';
const SocialNetworkList = () => {
    return (
        <div>
            <SocialNetworkItem
                link="#"
                pathImage={facebookIcon}
                alt="facebook logo icon"
            ></SocialNetworkItem>
            <SocialNetworkItem
                link="#"
                pathImage={instagramIcon}
                alt="instagram logo icon"
            ></SocialNetworkItem>
            <SocialNetworkItem
                link="#"
                pathImage={youtubeIcon}
                alt="youtube logo icon"
            ></SocialNetworkItem>
        </div>
    );
};
export default SocialNetworkList;
