import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './logo.css';

const Logo = (props) => {
    const { link = '#' } = props;
    return (
        <a href={link}>
            <img className="logo" src={logo} alt="logo of compony" />
        </a>
    );
};

Logo.propTypes = {
    link: PropTypes.string
};
export default Logo;
