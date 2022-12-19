import { ComponentStory } from '@storybook/react';
import {Upload} from './index';


export default {
  title: 'Organisms/Upload Resume',
  component: Upload,
};

const Template : ComponentStory<typeof Upload> = (args) => ( <Upload /> );

export const upload = Template.bind({});
upload.args = {};
