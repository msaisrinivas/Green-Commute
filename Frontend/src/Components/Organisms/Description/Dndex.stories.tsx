import { ComponentMeta, ComponentStory } from "@storybook/react";
import {DescCard} from "./index";
import myntra from "../../../images/icons/myntra.svg"

export default {
    title: "Organisms/Description",
    component: DescCard,
} as ComponentMeta<typeof DescCard>;

const Template: ComponentStory<typeof DescCard> = (args) => ( <DescCard {...args}/> );
  
  export const descCard = Template.bind({});
      descCard.args = {
          icon:myntra,
          title:'User Experiance Designer',
          company:'Myntra',
          address:'Hitech city, Hyderabad - 500072',
          postedTime:'2 days ago',
          isSaved:"Save",
      }
