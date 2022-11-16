import BenefitItem from '../components/benefit-item/benefit-item';

export default {
    title: 'Components/BenefitItem',
    component: BenefitItem
};
const Template = (args) => <BenefitItem {...args}></BenefitItem>;

export const Default = Template.bind({});
Default.args = {
    imageName: 'big-choice.svg',
    title: 'some title',
    description: 'some description',
    alt: 'some alt',
    nameClass: 'some class'
};
