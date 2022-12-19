import { Story } from "@storybook/react";
import { Header } from ".";

export default {
    title: "Organisms/Header",
    component: Header
}
const Template: Story<any> = (args) => <Header {...args}/> 

export const HeaderOrganism = Template.bind({})
HeaderOrganism.args = {
   location:"panjagutta, hyderabad 24/58",
}
