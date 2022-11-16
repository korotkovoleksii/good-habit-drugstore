import Modal from '../components/modal/modal';

export default {
    title: 'Components/Modal',
    component: Modal
};
const Template = (args) => <Modal {...args}></Modal>;

export const Default = Template.bind({});

Default.args = {};
