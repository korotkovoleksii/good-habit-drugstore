import downArrow from '../../assets/images/down-arrow-svgrepo-com.svg';
import upArrow from '../../assets/images/up-arrow-svgrepo-com.svg';
import './dropdown.css';
import { useState, useEffect } from 'react';
const Dropdown = () => {
    const [listLanguage, setListLanguage] = useState([]);
    const [choiceLanguage, setChoiceLanguage] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/language`)
            .then((response) => response.json())
            .then((data) => {
                setListLanguage(data);
                setChoiceLanguage(data[0]);
                setIsLoad(true);
            });
    }, []);

    const showDropDownContent = () => {
        setIsActive(!isActive);
    };
    const arrowImage = isActive ? (
        <img
            className="icon-select"
            src={upArrow}
            alt="up arrow for select"
        ></img>
    ) : (
        <img
            className="icon-select"
            src={downArrow}
            alt="down arrow for select"
        ></img>
    );

    const viewListLanguage = listLanguage.map((item) => {
        return (
            <div key={item.id} className="dropdown-item">
                <div>
                    {isActive}
                    <img
                        className="icon-language"
                        src={require(`../../assets/images/${item.imageName}`)}
                        alt={item.alt}
                    />
                    <p>{item.title}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="dropdown">
            {isLoad && (
                <div className="dropdown-header" onClick={showDropDownContent}>
                    <img
                        className="icon-language"
                        src={require(`../../assets/images/${choiceLanguage.imageName}`)}
                        alt={choiceLanguage.alt}
                    />
                    <p className="title-language">{choiceLanguage.title}</p>
                    {arrowImage}
                </div>
            )}

            {isActive && (
                <div className="dropdown-content">{viewListLanguage}</div>
            )}
        </div>
    );
};
export default Dropdown;
