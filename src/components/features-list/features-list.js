import './features-list.css';
import Feature from '../feature/feature';
import { useState, useEffect } from 'react';

const FeatureList = () => {
    const [error, setError] = useState(null);
    const [featureList, setFeatureList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/features`)
            .then((response) => {
                return !response.ok ? Promise.reject(error) : response.json();
            })
            .then((data) => {
                setFeatureList(data);

                setIsLoad(true);
            })
            .catch((error) => {
                setError(error);
                setIsLoad(true);
            });
    }, []);

    const showFeatures = featureList.map((item, index) => (
        <Feature
            key={index}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            atl={item.alt}
        ></Feature>
    ));

    return (
        <>
            {!error &&
                isLoad &&
                showFeatures.length <= 4 &&
                showFeatures.length >= 3 && (
                    <div className="feature-list" data-testid="feature">
                        {showFeatures}
                    </div>
                )}
        </>
    );
};
export default FeatureList;
