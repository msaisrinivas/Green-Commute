import { CheckBox,CheckBoxprops } from ".";
import { Story } from "@storybook/react"

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox
}
const Template: Story<CheckBoxprops> = (args) => <CheckBox {...args}/>
export const CheckB = Template.bind({})

CheckB.args = {
    checked:true
}
