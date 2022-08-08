import TabContentItem from '../tab-content-item/tab-content-item';
import './tab-content.css';
const TabContent = ({ tabData }) => {
    const view = tabData.items.map((item) => (
        <TabContentItem
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            textBtn={item['button-title']}
            link="#"
        ></TabContentItem>
    ));
    return <div className="tab-content">{view}</div>;
};
export default TabContent;
