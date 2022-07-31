import PropTypes from 'prop-types';
import Slider from '../slider/slider';
import AdBlock from '../ad-block/ad-block';
const AdBlockManager = ({ adData }) => {
    if (Array.isArray(adData)) {
        return (
            <>
                <Slider items={adData}></Slider>
            </>
        );
    }

    return (
        <>
            <AdBlock
                title={adData.title}
                description={adData.description}
                btnText={adData.titleBtn}
                image={adData.image}
                style={adData.style}
                isRight={adData.isRight}
            ></AdBlock>
        </>
    );
};

AdBlockManager.propTypes = {
    adData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default AdBlockManager;
