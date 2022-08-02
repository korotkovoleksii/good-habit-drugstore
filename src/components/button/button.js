import './button.css';
const Button = ({ title, style = { class: '' }, link }) => {
    return (
        <>
            <a className={`ad-block-btn ${style.class}`} href={link}>
                {title}
            </a>
        </>
    );
};
export default Button;
