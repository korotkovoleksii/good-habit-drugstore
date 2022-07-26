import HeaderInfo from '../header-info/header-info';
import Logo from '../logo/logo';
import SocialNetworkList from '../social-network-list/social-network-list';
import NavigationLinksList from '../navigation-links-list/navigation-links-list';

import Dropdown from '../dropdown/dropdown';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="header-top-bg ">
                <div className="header-top container">
                    <HeaderInfo></HeaderInfo>
                    <section className="social-network-language">
                        <SocialNetworkList></SocialNetworkList>
                        <Dropdown></Dropdown>
                    </section>
                </div>
            </div>

            <div className="container ">
                <div className="header-bottom">
                    <Logo link="#"></Logo>
                    <NavigationLinksList></NavigationLinksList>
                </div>
            </div>
        </div>
    );
};

export default Header;
