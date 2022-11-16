import { useState, useEffect } from 'react';
import AdBlockManager from '../ad-block-manager/ad-block-manager';
import './ad-block-fast-deliv.css';

const AdBlockFastDeliv = () => {
    const [adBlockInfo, setAdBlockInfo] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/ad-block`)
            .then((response) => response.json())
            .then((data) => {
                setAdBlockInfo(data['ad-block-fast-delivery']);
                setIsLoad(true);
            });
    }, []);
    return (
        <div className="ad-block-fast-deliv">
            {isLoad && <AdBlockManager adData={adBlockInfo}></AdBlockManager>}
        </div>
    );
};

export default AdBlockFastDeliv;
