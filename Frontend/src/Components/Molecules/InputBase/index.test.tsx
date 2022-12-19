import { fireEvent, render, screen } from "@testing-library/react"
import React from "react";
import CityInput from "."
import { cities } from "../../../Data/Cities";

it("InputBase Testing for Cities", async () => {
    render(<CityInput
        placeholder={"Enter your job location"}
        multiple={true}
        limitTags={2}
        size={"medium"}
        locations={cities}
        value={[]}
      />);
    const InputBaseElement = screen.getByTestId("Auto-complete");
    expect(InputBaseElement).toBeInTheDocument();
})

it("InputBase Testing for fireEvent Blur", () => {
    render(<CityInput placeholder={"Enter your Location"} locations={cities}  value={[]}/>);
    const InputBaseElement = screen.queryByPlaceholderText("Enter your Location") as HTMLInputElement;
    fireEvent.blur(InputBaseElement, {target:{value: "Hyderabad"}})
    const InputBaseElementAfterFire = screen.getByPlaceholderText("Enter your Location");
    expect(InputBaseElementAfterFire).toBeInTheDocument();
})

it("InputBase Testing for fireEvent Blur NoText", () => {
    render(<CityInput placeholder={"Enter your Location"} locations={cities}  value={[]}/>);
    const InputBaseElement = screen.queryByPlaceholderText("Enter your Location") as HTMLInputElement;
    fireEvent.blur(InputBaseElement, {target:{value: ""}})
    const InputBaseElementAfterFire = screen.getByPlaceholderText("Enter your Location");
    expect(InputBaseElementAfterFire).toBeInTheDocument();
})

it("InputBase Testing for fireEvent and chips", () => {
    render(<CityInput placeholder={"Enter your Location"} locations={cities} multiple={true} size={"small"} limitTags={1}  value={[{area:"Mumbai",AQI:"780"}]}/>);
    const InputBaseElement = screen.queryByPlaceholderText("Enter your Location") as HTMLInputElement;
    fireEvent.change(InputBaseElement, {target:{value: "Hyderabad"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire, {target:{value: "Hyderabad"}})
    const ChipElement = screen.getByTestId("chip-check")
    expect(ChipElement).toBeInTheDocument();
})