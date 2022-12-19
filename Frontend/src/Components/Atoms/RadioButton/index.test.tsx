import { render, screen } from "@testing-library/react";
import CustomizedRadiosAtom from ".";

describe('Checkbox atom', () => {
  it("renders checked Radio button", () => {
    render(<CustomizedRadiosAtom />)
    const button = screen.getByTestId("CheckBox1");
    expect(button).toBeTruthy();
  });
}); 