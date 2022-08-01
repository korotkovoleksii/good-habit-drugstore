import { useContext } from 'react';
import AdBlock from '../ad-block/ad-block';
import './ad-block-list.css';

import { SliderContext } from '../slider/slider';

const AdBlockList = () => {
    const { slideNumber, items } = useContext(SliderContext);

    const slides = items.map((item) => {
        return (
            <AdBlock
                key={item.id}
                title={item.title}
                description={item.description}
                btnText={item.titleBtn}
                image={item.image}
                style={item.style}
                isRight={item.isRight}
            ></AdBlock>
        );
    });
    return (
        <div
            className="container slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {slides}
        </div>
    );
};
export default AdBlockList;
