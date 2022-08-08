import TabContent from '../components/tab-content/tab-content';

export default {
    title: 'Components/TabContent',
    component: TabContent
};

const Template = (args) => <TabContent {...args}></TabContent>;

export const Default = Template.bind({});

Default.args = {
    tabData: {
        items: [
            {
                id: 'test',
                title: 'test',
                price: '4235',
                image: 'drops.jpeg',
                'button-title': 'button title'
            }
        ]
    }
};
