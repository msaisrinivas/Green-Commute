import { Box } from '@mui/material';
import { ComponentStory} from '@storybook/react';
import Cards from '.';
import Hp from "../../../images/icons/hp.svg";

export default {
  title: 'Organisms/Cards ',
  component: Cards,
}

const Template: ComponentStory<typeof Cards> = (args) => (
  <Box sx={{backgroundColor:"#E5E5E5", height:"100vh"}}><Cards {...args} /></Box>
);

export const smallCards = Template.bind({});
smallCards.args = {
  icons: Hp,
  job:"User Experience Designer",
  company:"HP",
  location:"Hyderabad, Telangana, India",
  bike:true,
  bus:true,
  car:true,
  train:true,
  postedTime:"36 mins ago",
  state: false,

};

export const largeCards = Template.bind({});
largeCards.args = {
  icons:Hp,
  job:"User Experience Designer",
  company:"HP",
  location:"Hyderabad, Telangana, India",
  bike:true,
  bus:true,
  car:true,
  train:true,
  postedTime:"1hr 36 mins ago",
  state:true,

};