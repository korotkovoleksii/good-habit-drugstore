import './social-network-list.css';
import SocialNetworkItem from '../social-network-item/social-network-item';
import { useState, useEffect } from 'react';
const SocialNetworkList = () => {
    const [arrSocialNetwork, setArrSocialNetwork] = useState([]);

    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/social-network`)
            .then((response) => response.json())
            .then((data) => {
                setArrSocialNetwork(data);
            });
    }, []);

    const socialNetworkItems = arrSocialNetwork.map((item) => {
        return (
            <SocialNetworkItem
                key={item.id}
                link={item.link}
                pathImage={item.icon}
                alt={item.alt}
            />
        );
    });

    return <div className="social-network-list">{socialNetworkItems}</div>;
};
export default SocialNetworkList;
