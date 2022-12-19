import { ComponentStory } from '@storybook/react'
import CustomizedRadiosAtom from '.'

export default {
    title: 'Atoms/RadioButtons',
    component: CustomizedRadiosAtom,
}

const Template: ComponentStory<typeof CustomizedRadiosAtom> = (args) => < CustomizedRadiosAtom />

export const RadioBtn = Template.bind({})
RadioBtn.args = {}