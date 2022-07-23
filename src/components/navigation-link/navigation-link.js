import './navigation-link.css';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
    const { title, link } = props;
    return (
        <a className="navigation-link" href={link}>
            {title}
        </a>
    );
};

NavigationLink.PropTypes = {
    title: PropTypes.string,
    link: PropTypes.string
};

export default NavigationLink;
