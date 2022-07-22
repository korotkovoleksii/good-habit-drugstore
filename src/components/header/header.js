import HeaderInfo from '../header-info/header-info';
import Logo from '../logo/logo';
import SocialNetworkList from '../social-network-list/social-network-list';
import NavigationLinksList from '../navigation-links-list/navigation-links-list';
import SelectLanguage from '../select-language/select-language';
import './header.css';
import { useEffect } from 'react';

const Header = () => {
    // require('dotenv').config();
    console.log(process.env);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const domain = process.env.REACT_APP_DOMIN;
        fetch(`${domain}/header-info`)
            .then((response) => response.json())
            .then((data) => console.log(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
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
