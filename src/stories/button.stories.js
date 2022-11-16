import Button from '../components/button/button';

export default {
    title: 'Components/Button',
    component: Button
};
const Template = (args) => <Button {...args}></Button>;
export const Default = Template.bind({});

Default.args = {
    title: 'default title',
    style: { class: '' },
    link: '#',
    onClick: () => {}
};
