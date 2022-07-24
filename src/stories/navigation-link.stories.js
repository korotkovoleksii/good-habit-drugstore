import NavigationLink from '../components/navigation-link/navigation-link';

export default {
    title: 'Components/NavigationLink',
    component: NavigationLink
};
const Template = (args) => <NavigationLink {...args}></NavigationLink>;

export const Default = Template.bind({});
Default.args = {
    title: 'Title NavigationLink',
    link: '#'
};
