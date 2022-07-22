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
    console.log(arrSocialNetwork);
    const socialNetworkItems = arrSocialNetwork.map((item) => {
        return (
            <SocialNetworkItem
                link={item.link}
                pathImage={item.icon}
                alt={item.alt}
            ></SocialNetworkItem>
        );
    });
    return <div>{socialNetworkItems}</div>;
};
export default SocialNetworkList;
