import { ComponentStory} from '@storybook/react';
import Sidepane from '.';

export default {
  title: 'Organisms/SidePanel',
  component: Sidepane,
}

const Template: ComponentStory<typeof Sidepane> = (args) => (
  <Sidepane {...args}/>
);

export const sidePane = Template.bind({});
sidePane.args = {
  setDesc:()=>{}
}