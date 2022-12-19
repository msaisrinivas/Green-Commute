import CityInput from ".";
import { ComponentStory } from "@storybook/react";
import { areas, cities } from "../../../Data/Cities";

export default {
    title : "Molecules/CityInput",
    component : CityInput
}

const Template:ComponentStory<typeof CityInput> = (args) => ( <CityInput {...args} /> );

export const WhereDoYouStay = Template.bind({});
WhereDoYouStay.args = {
    locations:areas,
    placeholder:"Enter your Location",
    value: { area: "Ameerpet, Hyderabad, Telangana", AQI:"535" }
}

export const JobLocation = Template.bind({});
JobLocation.args = {
    multiple:true,
    limitTags:1,
    size:"medium",
    locations:cities,
    placeholder:"Enter Your Job Location",
    value: [{area:"Mumbai",AQI:"780"}],
}