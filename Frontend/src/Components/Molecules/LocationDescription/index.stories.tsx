import { Story } from "@storybook/react";
import {Location } from ".";

export default {
    title: "Molecules/Location",
    component: Location
}

const Template: Story<any> = args => <Location />

export const MapViewMolecule = Template.bind({})
MapViewMolecule.args = {
    
}