import { useState, useEffect } from 'react';
import TabNavItem from '../tab-nav-item/tab-nav-item';
import TabContent from '../tab-content/tab-content';
import './tabs.css';

const Tabs = () => {
    const [error, setError] = useState(null);
    const [tabsData, setTabsData] = useState({});
    const [activeTab, setActiveTab] = useState();
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/tab `)
            .then((response) => {
                return !response.ok ? Promise.reject(error) : response.json();
            })
            .then((data) => {
                setTabsData(data);
                setActiveTab(data.data[0].category);
                setIsLoad(true);
            })
            .catch((error) => {
                setError(error);
                setIsLoad(true);
            });
    }, []);

    const handleTabClick = (tabLabel) => {
        setActiveTab(() => tabLabel);
    };
    const renderTabContent = () => {
        if (isLoad) {
            const tabContent = tabsData.data.find(
                (item) => item.category === activeTab
            );
            return <TabContent tabData={tabContent}></TabContent>;
        }
    };
    const view = renderTabContent();

    return (
        <>
            {!error && isLoad && (
                <div className="container tabs">
                    <p className="tab-title">{tabsData.title}</p>
                    <p className="tab-description">{tabsData.description}</p>
                    <div className="tab-nav-bar">
                        <ul>
                            {tabsData.data.map((item, index) => (
                                <TabNavItem
                                    key={index}
                                    label={item.category}
                                    isActive={item.category === activeTab}
                                    handleTab={handleTabClick}
                                ></TabNavItem>
                            ))}
                        </ul>
                    </div>
                    {view}
                </div>
            )}
        </>
    );
};
export default Tabs;
