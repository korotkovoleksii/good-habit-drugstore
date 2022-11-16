import { useContext } from 'react';
import { SliderContext } from '../slider/slider';
import Dot from '../dot/dot';
import './dots.css';

const Dots = () => {
    const { slidesCount } = useContext(SliderContext);
    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    };
    return <div className="dots">{renderDots()}</div>;
};
export default Dots;
