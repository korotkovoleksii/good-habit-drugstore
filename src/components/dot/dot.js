import { useContext } from 'react';
import { SliderContext } from '../slider/slider';
import './dot.css';
const Dot = ({ number }) => {
    const { goToSlide, slideNumber } = useContext(SliderContext);
    return (
        <div
            className={`dot ${slideNumber === number ? 'selected' : ''}`}
            onClick={() => goToSlide(number)}
        />
    );
};
export default Dot;
