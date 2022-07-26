import SocialNetworkItem from '../components/social-network-item/social-network-item';

export default {
    title: 'Components/SocialNetworkItem',
    component: SocialNetworkItem
};

const Template = (args) => <SocialNetworkItem {...args}></SocialNetworkItem>;

export const Default = Template.bind({});

Default.args = {
    link: 'facebook.com',
    pathImage: 'facebook-icon.png',
    alt: 'facebook icon'
};
