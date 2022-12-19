import { ComponentStory} from "@storybook/react";
import {ReactComponent as Filter} from "../../../images/icons/filter.svg";
import { ButtonComponent } from "./Button";
import {  ArrowForwardOutlined } from "@mui/icons-material";
import {ReactComponent as Search} from "../../../images/icons/search.svg";
import {theme} from '../../../Theme/index';

export default {
    title: "Atoms/Buttons",
    component: ButtonComponent
}

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
    <ButtonComponent {...args} />
  );
export const Next = Template.bind({})
    Next.args = {
        variant: 'contained',
        label: 'Next',
        classing:'next',
    }

export const Save = Template.bind({})
    Save.args = {
        variant: 'outlined',
        label: 'Save',
        style:{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            textTransform: 'none',
            borderColor: theme.palette.green?.three,
            width: '92px',
            height: '32px',
            fontWeight: '700px',
            fontSize: '12px',
            lineHeight: '16px',
            color: theme.palette.green?.three,
        },
}

export const Saved = Template.bind({})
    Saved.args = {
        variant: 'outlined',
        label: 'Saved',
        classing:'save',
}

export const GreenCommuteButton = Template.bind({})
    GreenCommuteButton.args = {
        variant: 'contained',
        endIcon: <ArrowForwardOutlined  />,
        label: 'Green Commute Routes',
        style:{
            width: '409px',
            height: '64px',
            fontWeight: '600px',
            fontSize: '16px',
            lineHeight: '24px',
            background: theme.palette.light?.four,
            color:  '#30A193',
            textTransform:'none',
            borderRadius: '0px 0px 12px 12px',
        }
}

export const filterButton = Template.bind({})
    filterButton.args = {
        variant: 'contained',
        label: 'Filter',
        startIcon:<Filter />,
        style:{
            width: '137px',
            height: '56px',
            fontWeight: '500px',
            fontSize: '14px',
            color:"black",
            lineHeight: '22px',
            backgroundColor:  theme.palette.light?.four,
            borderRadius: '32px',
            textTransform:'none',
        }
}

export const IconButton = Template.bind({})
    IconButton.args = {
        variant: 'contained',
        startIcon: <div style={{paddingLeft:'10px',paddingTop:'10px'}}><Search /></div>,
        classing:'iconBtn',
}

