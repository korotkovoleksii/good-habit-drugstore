import './body.css';
import MainAdBlock from '../main-ad-block/main-ad-block';
import FeatureList from '../features-list/features-list';
import Benefits from '../benefits/benefits';
import AdBlockFastDeliv from '../ad-block-fast-deliv/ad-block-fast-deliv';
import Tabs from '../tabs/tabs';
const Body = () => {
    return (
        <div className="body">
            <MainAdBlock></MainAdBlock>
            <FeatureList></FeatureList>
            <Benefits></Benefits>
            <AdBlockFastDeliv></AdBlockFastDeliv>
            <Tabs></Tabs>
        </div>
    );
};
export default Body;
