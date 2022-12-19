import { Story } from "@storybook/react";
import { CheckBoxText, CheckBoxTextProps } from ".";

export default {
    title: "Molecules/CheckBoxText",
    component: CheckBoxText
}

const Template: Story<CheckBoxTextProps> = args => <CheckBoxText {...args} />

export const CheckBoxBind = Template.bind({})
CheckBoxBind.args = {
    label: "Past 24 hours",
    check: true
}