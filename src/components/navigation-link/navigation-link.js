import './navigation-link.css';

const NavigationLink = (props) => {
    const { title, link } = props;
    return <a href={link}>{title}</a>;
};
export default NavigationLink;
