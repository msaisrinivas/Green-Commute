import { fireEvent, render, screen } from "@testing-library/react"
import Sidepane from "."

it("Side Pane Test",() => {
    render(<Sidepane setDesc={()=>{}}/>);
    const SideElement = screen.getByTestId("drawer-main");
    expect(SideElement).toBeInTheDocument(); 
})

it("Side Pane List Items Test",() => {
    render(<Sidepane setDesc={()=>{}}/>);
    const SideElement = screen.getAllByRole("button");
    expect(SideElement.length).toBe(5); 
})

it("Side Pane FindJobs Click Test",() => {
    render(<Sidepane  setDesc={()=>{}}/>);
    const SideElement = screen.getByTestId("button-test-1");
    fireEvent.click(SideElement);
    const SideAfterFireElement = screen.getByTestId("find-box");
    expect(SideAfterFireElement).toHaveTextContent("Find Jobs"); 
})

it("Side Pane SaveJobs Click Test",() => {
    render(<Sidepane  setDesc={()=>{}}/>);
    const SideElement = screen.getByTestId("button-test-2");
    fireEvent.click(SideElement);
    const SideAfterFireElement = screen.getByTestId("saved-box");
    expect(SideAfterFireElement).toHaveTextContent("Saved Jobs"); 
})

it("Side Pane Dashboard Click Test",() => {
    render(<Sidepane  setDesc={()=>{}}/>);
    const SideElement = screen.getByTestId("button-test-0");
    fireEvent.click(SideElement);
    const SideAfterFireElement = screen.getByTestId("find-box");
    expect(SideAfterFireElement).toHaveTextContent("Find Jobs"); 
})