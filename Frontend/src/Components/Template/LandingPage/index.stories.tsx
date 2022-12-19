import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LandingTemplate } from "./index";
import { ReactComponent as Logo } from "../../../images/icons/logo-1.svg";
import HomePageStepper from "../../Organisms/Stepper";
import CityInput from "../../Molecules/InputBase";
import { areas, cities } from "../../../Data/Cities";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Templates/LandingTemplate",
    component: LandingTemplate,
} as ComponentMeta<typeof LandingTemplate>;

const Template: ComponentStory<typeof LandingTemplate> = (args) => ( <BrowserRouter><LandingTemplate {...args}/></BrowserRouter> );
  
export const LandingTemp = Template.bind({});
    LandingTemp.args = {
        homestepper: <HomePageStepper
        step1={<CityInput placeholder={"Enter your Location"} locations={areas} value={{area: "Ameerpet, Hyderabad, Telangana"}}/>}
        step2={<CityInput placeholder={"Enter your job location"} multiple={true} limitTags={2} size={"medium"} locations={cities} value={[{area: "Mumbai"},{area: "Hyderabad"}]}/>}
        step3={<CityInput placeholder={"Enter your skills"} multiple={true} limitTags={2} size={"medium"} locations={cities} value={[]}/>}
        />,
        Logo: <Logo width={"205"} height={"40"} />,
    }