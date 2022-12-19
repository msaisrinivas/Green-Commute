import { Story } from '@storybook/react'
import { Icons, IconsProps } from '.'
import BikeIcon from "../../../images/icons/bike.svg"

export default {
    title: 'Atoms/icons',
    component: Icons,
}

const Template: Story<IconsProps> = (args) => < Icons {...args} />

export const Bike = Template.bind({})
Bike.args = {
    source: BikeIcon,
    height: "20px",
    width: "20px"
}