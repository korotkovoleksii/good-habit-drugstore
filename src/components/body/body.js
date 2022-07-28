import './body.css';
import MainAdBlock from '../main-ad-block/main-ad-block';
import FeatureList from '../features-list/features-list';
const Body = () => {
    return (
        <div className="container body">
            <MainAdBlock></MainAdBlock>
            <FeatureList></FeatureList>
        </div>
    );
};
export default Body;
