import { ComponentStory } from "@storybook/react";
import Chips from ".";
export default {
    title : "Atoms/Chips",
    component : Chips
}

const Template:ComponentStory<typeof Chips> = (args) => ( <Chips {...args}/> );

export const chip = Template.bind({});
chip.args = {
    onDelete:() => {},
    label:"10 - 20 Kms",
    size:"medium",
    sx:{borderRadius:"8px", backgroundColor:"white", height:"32px", maxHeight:"100%", border:"1px solid black"}
}