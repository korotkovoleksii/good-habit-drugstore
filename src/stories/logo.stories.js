import Logo from '../components/logo/logo';

export default {
    title: 'Components/Logo',
    component: Logo
};
const Template = (args) => <Logo {...args}></Logo>;

export const Default = Template.bind({});
Default.args = {
    link: '#'
};
