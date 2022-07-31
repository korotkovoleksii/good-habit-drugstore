// import AdBlock from '../ad-block/ad-block';
import { useState, useEffect } from 'react';
import Slider from '../slider/slider';

const MainAdBlock = () => {
    const [adBlockInfo, setAdBlockInfo] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/ad-block`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAdBlockInfo(data['slider']);
                setIsLoad(true);
            });
    }, []);
    return (
        <div>
            {isLoad && (
                <Slider items={adBlockInfo}></Slider>
                // <AdBlock
                //     title={adBlockInfo.title}
                //     description={adBlockInfo.description}
                //     btnText={adBlockInfo.titleBnt}
                //     image={adBlockInfo.image}
                //     style={adBlockInfo.style}
                //     isRight={adBlockInfo.isRight}
                // ></AdBlock>
            )}
        </div>
    );
};
export default MainAdBlock;
