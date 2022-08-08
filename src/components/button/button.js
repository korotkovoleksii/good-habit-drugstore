import PropTypes from 'prop-types';
import './button.css';
const Button = ({ title, style, link, onClick }) => {
    return (
        <>
            <a
                className={`ad-block-btn ${style.class}`}
                href={link}
                onClick={onClick}
            >
                {title}
            </a>
        </>
    );
};
Button.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    link: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    title: 'default title',
    style: { class: '' },
    link: '#',
    onClick: () => {}
};

export default Button;
