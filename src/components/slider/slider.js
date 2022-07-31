import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Arrows from '../arrows/arrows';
import Dots from '../dots/dots';
import AdBlockList from '../ad-block-list/ad-block-list';
import './slider.css';

export const SliderContext = createContext();

const Slider = (props) => {
    const [items] = useState(props.items);
    const [slide, setSlide] = useState(0);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;
        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };
    const goToSlide = (number) => {
        setSlide(number % items.length);
    };
    return (
        <div className="slider">
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items
                }}
            >
                <div className="container slider-wrap">
                    <AdBlockList />
                    <Dots />
                </div>
                <Arrows />
            </SliderContext.Provider>
        </div>
    );
};
Slider.propTypes = {
    items: PropTypes.array
};
Slider.defaultProps = {
    items: []
};
export default Slider;
