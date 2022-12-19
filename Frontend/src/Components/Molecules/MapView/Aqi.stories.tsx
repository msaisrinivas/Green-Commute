import { ComponentStory } from '@storybook/react';
import mapview from "../../../images/icons/mapview.svg";
import roadmap from "../../../images/icons/maps.svg"
import aqi894 from "../../../images/icons/aqibord.svg"
import aqi2 from "../../../images/icons/2aqi.svg"
import man from "../../../images/icons/man.svg"
import paint from "../../../images/icons/paint.svg"
import AqiImage from './AqiImage';

export default {
  title: 'Molecules / MockPictures',
  component: AqiImage,
}

const Template : ComponentStory<typeof AqiImage> = (args) => (
  <AqiImage {...args} />
)

export const MapView = Template.bind({});
MapView.args = {
  src: mapview,
  height: 143,
  width: 361,
}

export const Maps = Template.bind({});
Maps.args = {
  src: roadmap,
  height: 344,
  width: 281,
}

export const AQI1 = Template.bind({});
AQI1.args = {
  src: aqi894,
  height: 212,
  width: 214,
  text:"595"
}

export const AQI2 = Template.bind({});
AQI2.args = {
  src: aqi2,
  height: 500,
  width: 325,
}

export const PaintImage = Template.bind({});
PaintImage.args = {
  src: paint,
  height: 348,
  width: 417,
}

export const WorkingMan = Template.bind({});
WorkingMan.args = {
  src: man,
  height: 347,
  width: 380,
}