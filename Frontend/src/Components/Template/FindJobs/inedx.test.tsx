import { render, screen } from "@testing-library/react";
import FindJobs from ".";
import { Header } from "../../Organisms/Header";
import Sidepane from "../../Organisms/SidePane";

it("Checking Header in FindJobs Template",() => {
    render(<FindJobs header={<Header/>} sidepane={<Sidepane setDesc={function (): void {
        throw new Error("Function not implemented.");
    } }/>}/>)
    const HeaderElement  = screen.getByTestId("header");
    expect(HeaderElement).toBeInTheDocument();
});