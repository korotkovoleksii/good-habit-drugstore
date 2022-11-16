import TabContentItem from '../components/tab-content-item/tab-content-item';

export default {
    title: 'Components/TabContentItem',
    component: TabContentItem
};

const Template = (args) => <TabContentItem {...args}></TabContentItem>;

export const Default = Template.bind({});

Default.args = {
    title: 'default title',
    price: 'default price',
    image: 'drops.jpeg',
    textBtn: 'default text',
    link: '#'
};
