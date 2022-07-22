import HeaderInfo from '../header-info/header-info';
import Logo from '../logo/logo';
import SocialNetworkList from '../social-network-list/social-network-list';
import NavigationLinksList from '../navigation-links-list/navigation-links-list';
import SelectLanguage from '../select-language/select-language';
import './header.css';

const Header = () => {
    return (
        <div>
            <HeaderInfo></HeaderInfo>
            <SocialNetworkList></SocialNetworkList>
            <SelectLanguage></SelectLanguage>
            <NavigationLinksList></NavigationLinksList>
            <Logo></Logo>;
        </div>
    );
};

export default Header;
