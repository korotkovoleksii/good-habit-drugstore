import { useContext } from 'react';
import { SliderContext } from '../slider/slider';
import PropTypes from 'prop-types';
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
Dot.propTypes = {
    number: PropTypes.number
};
export default Dot;
