import { useState, useEffect } from 'react';
import AdBlockManager from '../ad-block-manager/ad-block-manager';
import './ad-block-slider.css';

const AdBlockSlider = () => {
    const [error, setError] = useState(null);
    const [dataSlider, setDataSlider] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/ad-block`)
            .then((response) => {
                return !response.ok ? Promise.reject(error) : response.json();
            })
            .then((data) => {
                console.log(data);
                setDataSlider(data['slider']);

                setIsLoad(true);
            })
            .catch((error) => {
                setError(error);
                setIsLoad(true);
            });
    }, []);

    return (
        <div className="ad-block-slider">
            {!error && isLoad && (
                <AdBlockManager adData={dataSlider}></AdBlockManager>
            )}
        </div>
    );
};
export default AdBlockSlider;
