import './logo.css';
import logo from '../../assets/images/logo.svg';

const Logo = (props) => {
    const { link } = props;
    return (
        <a href={link}>
            <img className="logo" src={logo} alt="logo of compony" />
        </a>
    );
};
export default Logo;
