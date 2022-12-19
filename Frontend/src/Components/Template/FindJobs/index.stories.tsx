import { ComponentStory } from "@storybook/react";
import FindJobs from ".";
import Cards from "../../Organisms/Cards";
import { Header } from "../../Organisms/Header";
import Sidepane from "../../Organisms/SidePane";

export default {
  title: "Templates/FindJobs",
  component: FindJobs,
};

const Template: ComponentStory<typeof FindJobs> = (args) => (
  <FindJobs {...args} />
);

export const PlaneFindJobsTemplate = Template.bind({});
PlaneFindJobsTemplate.args = {
  header: <Header/>,
  sidepane: <Sidepane setDesc={function (): void {
    throw new Error("Function not implemented.");
  } }/>,
};

export const FindJobsTemplate = Template.bind({});
FindJobsTemplate.args = {
  header: <Header />,
  sidepane: (
    <Sidepane
      findPage={<Cards
        icons="/images/icons/hp.svg"
        job="User Experience Designer"
        company="HP"
        location="Hyderabad, Telangana, India"
        bike={true}
        bus={true}
        car={true}
        train={true}
        postedTime="1hr 36 mins ago"
        state={false} />}
      savedPage={<Cards
        icons="/images/icons/hp.svg"
        job="User Experience Designer"
        company="HP"
        location="Hyderabad, Telangana, India"
        bike={true}
        bus={true}
        car={true}
        train={true}
        postedTime="1hr 36 mins ago"
        state={true} />} setDesc={function (): void {
          throw new Error("Function not implemented.");
        } }    />
  ),
};
