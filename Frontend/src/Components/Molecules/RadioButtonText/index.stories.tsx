import { Story } from '@storybook/react'
import { CustomizedRadios } from '.'
import { RadioProps } from "."
export default {
    title: 'Molecules/RadioButtonsText',
    component: CustomizedRadios,
}
const Template: Story<RadioProps> = (args) => < CustomizedRadios {...args} />

export const RadioLabel = Template.bind({})
RadioLabel.args = {
    label1: "Yes",
    label2: "No"
}