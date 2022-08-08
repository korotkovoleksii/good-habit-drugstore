import { useEffect, useState } from 'react';
import NavigationLink from '../navigation-link/navigation-link';
import './navigation-links-list.css';

const NavigationLinksList = () => {
    const [arrNavigationLinks, setArrNavigationLinks] = useState([]);

    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/navigation-link`)
            .then((response) => response.json())
            .then((data) => {
                setArrNavigationLinks(data);
            });
    }, []);
    const navigationLinks = arrNavigationLinks.map((item) => {
        return (
            <NavigationLink
                key={item.id}
                title={item.title}
                link={item.link}
            ></NavigationLink>
        );
    });
    return <div className="navigation-links-list">{navigationLinks}</div>;
};
export default NavigationLinksList;
