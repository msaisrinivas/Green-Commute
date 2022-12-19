import { fireEvent, render, screen } from "@testing-library/react";
import { Filter } from ".";
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg"

describe('<FormControl>', () => {
  test('Checkbox click fire event', () => {
    render(<Filter />);
    const name = screen.getByText("Filter");
    fireEvent.click(name);
    const modal = screen.getByDisplayValue("0 - 10 Kms");
    fireEvent.click(modal);
    expect(modal).toBeInTheDocument();
  })

  test('clear all fire event', () => {
    render(<Filter />);
    const name = screen.getByText("Clear All");
    fireEvent.click(name);
    const boxElement = screen.getByTestId("ChipBox");
    expect(boxElement.childElementCount).toBe(0);
  })

  test('RadioButton Fire event', () => {
    render(<Filter />);
    const name = screen.getByText("Filter");
    fireEvent.click(name);
    const modal = screen.getByLabelText("No");
    fireEvent.click(modal);
    const boxElement = screen.getByTestId("ChipBox");
    expect(boxElement.childElementCount).toBe(0);
  })

  test("search icon  button", () => {
    render(<ButtonComponent startIcon={<FilterIcon />} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    })

});