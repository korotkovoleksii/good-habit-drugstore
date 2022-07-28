import BenefitItem from '../benefit-item/benefit-item';
import './benefits.css';
import { useState, useEffect } from 'react';
const Benefits = () => {
    const [error, setError] = useState(null);
    const [benefitsList, setBenefitsList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/benefits`)
            .then((response) => {
                return !response.ok ? Promise.reject(error) : response.json();
            })
            .then((data) => {
                setBenefitsList(data);

                setIsLoad(true);
            })
            .catch((error) => {
                setError(error);
                setIsLoad(true);
            });
    }, []);
    const showBenefits = benefitsList.map((item) => (
        <BenefitItem
            key={item.id}
            title={item.title}
            description={item.description}
            alt={item.alt}
            imageName={item.imageName}
            nameClass={item.nameClass}
        ></BenefitItem>
    ));
    return (
        <>
            {!error &&
                isLoad &&
                showBenefits.length <= 3 &&
                showBenefits.length > 1 && (
                    <div className="benefits">{showBenefits}</div>
                )}
        </>
    );
};

export default Benefits;
