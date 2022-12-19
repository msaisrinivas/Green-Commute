import { Story } from "@storybook/react";
import { SearchJob } from ".";

export default {
    title: "Organisms/SearchJob",
    component: SearchJob
}
const Template: Story<any> = (args) => <SearchJob {...args}/> 

export const searchJobOrganism = Template.bind({})
searchJobOrganism.args = {
   skills:["frontend developer","Full stack developer"],
   locations:["Hyderabad","Mumbai"]
}
