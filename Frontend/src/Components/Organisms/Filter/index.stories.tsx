import { Box } from "@mui/material";
import { Story } from "@storybook/react";
import { Filter } from ".";

export default {
    title: "Organisms/Filter",
    component: Filter
}

const Template: Story<any> = args => <Box display="flex" justifyContent="center" alignItems="center"><Filter /></Box>

export const filterOrganism = Template.bind({})
filterOrganism.args = {
   
}