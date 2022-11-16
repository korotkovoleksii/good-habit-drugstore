import Feature from '../components/feature/feature';

export default {
    title: 'Components/Feature',
    component: Feature
};
const Template = (args) => <Feature {...args}></Feature>;

export const Default = Template.bind({});
Default.args = {
    title: 'Easy Return',
    description: 'Simple returns policy',
    imageName: 'easy-return.svg',
    alt: 'some alt'
};
