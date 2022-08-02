import PropTypes from 'prop-types';
import './button.css';
const Button = ({ title, style, link }) => {
    return (
        <>
            <a className={`ad-block-btn ${style.class}`} href={link}>
                {title}
            </a>
        </>
    );
};
Button.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    link: PropTypes.string
};

Button.defaultProps = {
    title: 'default title',
    style: { class: '' },
    link: '#'
};

export default Button;
