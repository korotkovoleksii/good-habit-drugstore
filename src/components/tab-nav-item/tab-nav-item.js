import PropTypes from 'prop-types';
import './tab-nav-item.css';
const TabNavItem = ({ label, isActive, handleTab }) => {
    let style = 'tab-nav-item';
    style += isActive ? ' active' : '';

    const handleActive = () => {
        handleTab(label);
        style += ' active';
    };
    return (
        <li onClick={() => handleActive()} className={style}>
            {label}
        </li>
    );
};
TabNavItem.propTypes = {
    label: PropTypes.string,
    isActive: PropTypes.bool,
    handleTab: PropTypes.func
};
export default TabNavItem;
