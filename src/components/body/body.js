import './body.css';
import MainAdBlock from '../main-ad-block/main-ad-block';
import FeatureList from '../features-list/features-list';
import Benefits from '../benefits/benefits';
const Body = () => {
    return (
        <div className="container body">
            <MainAdBlock></MainAdBlock>
            <FeatureList></FeatureList>
            <Benefits></Benefits>
        </div>
    );
};
export default Body;
