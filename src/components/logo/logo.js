import './logo.css';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';

const Logo = (props) => {
    const { link } = props;
    return (
        <a href={link}>
            <img className="logo" src={logo} alt="logo of compony" />
        </a>
    );
};

Logo.PropTypes = {
    link: PropTypes.string
};
export default Logo;
