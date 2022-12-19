import { Story } from "@storybook/react";
import FindPage from "../../Pages/FindPage";

export default {
    title: "Pages/FindJobs",
    component: FindPage
}

const Template: Story<any> = args => <FindPage />

export const stepperOranism = Template.bind({})
stepperOranism.args = {

}