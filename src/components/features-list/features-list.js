import './features-list.css';
import Feature from '../feature/feature';
import { useState, useEffect } from 'react';

const FeatureList = () => {
    const [featureList, setFeatureList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/features`)
            .then((response) => response.json())
            .then((data) => {
                setFeatureList(data);

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
            {isLoad && showFeatures.length >= 3 && (
                <div className="feature-list"> {showFeatures} </div>
            )}
        </>
    );
};
export default FeatureList;
