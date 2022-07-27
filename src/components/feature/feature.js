import './feature.css';

const Feature = (props) => {
    const { title, description, imageName, alt } = props;

    return (
        <div className="feature">
            <img
                src={require(`../../assets/images/${imageName}`)}
                alt={alt}
                className="icon-feature"
            />
            <section>
                <p className="title-feature">{title}</p>
                <p className="description-feature">{description}</p>
            </section>
        </div>
    );
};

export default Feature;
