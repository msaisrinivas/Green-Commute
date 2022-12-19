import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import HomePageStepper from ".";

export default {
    title: "Organisms/stepper",
    component: HomePageStepper
}

const Template: Story<any> = args => <BrowserRouter><HomePageStepper {...args}/></BrowserRouter>

export const stepperOranism = Template.bind({})
stepperOranism.args = {
    
}