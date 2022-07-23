import './navigation-link.css';

const NavigationLink = (props) => {
    const { title, link } = props;
    return (
        <a className="navigation-link" href={link}>
            {title}
        </a>
    );
};
export default NavigationLink;
