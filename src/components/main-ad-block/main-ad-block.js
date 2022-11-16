import { useState, useEffect } from 'react';

import AdBlockManager from '../ad-block-manager/ad-block-manager';

const MainAdBlock = () => {
    const [adBlockInfo, setAdBlockInfo] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/ad-block`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAdBlockInfo(data['main']);
                setIsLoad(true);
            });
    }, []);
    return (
        <div>
            {isLoad && <AdBlockManager adData={adBlockInfo}></AdBlockManager>}
        </div>
    );
};
export default MainAdBlock;
