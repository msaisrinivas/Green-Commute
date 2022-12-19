import { ComponentStory } from '@storybook/react';
import {UploadSuccess} from './index';


export default {
  title: 'Organisms/Upload Resume',
  component: UploadSuccess,
};

const Template : ComponentStory<typeof UploadSuccess> = (args) => ( <UploadSuccess /> );

export const uploadSuccess = Template.bind({});
uploadSuccess.args = {};