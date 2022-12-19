import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OlaCard } from '.';
import olaIcon from '../../../images/icons/ola.svg';


export default {
  title: 'molecules/OlaCard',
  component: OlaCard,
} as ComponentMeta<typeof OlaCard>;

const Template: ComponentStory<typeof OlaCard> = (args) => (
  <OlaCard {...args} />
);

export const bookCard = Template.bind({});
    bookCard.args = {
        Icon:olaIcon,
};