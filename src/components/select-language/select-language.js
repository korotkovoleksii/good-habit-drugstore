import englishLandIcon from '../../assets/images/english-lang-icon.png';
import downArrow from '../../assets/images/down-arrow-svgrepo-com.svg';
import './select-language.css';

const SelectLanguage = () => {
    return (
        <div className="select-language">
            <img
                className="icon-language"
                src={englishLandIcon}
                alt="english language icon"
            />
            <p className="title-language">EN</p>
            <img className="icon-select" src={downArrow} alt="" />
        </div>
    );
};
export default SelectLanguage;
