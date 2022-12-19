import { render, screen } from "@testing-library/react";
import { CustomizedRadios } from ".";

describe('<FormControl>', () => {
  test('check if it is present', () => {
    render(<CustomizedRadios label1="Yes" label2="No" />);
    const name = screen.getByTestId('radioButton');
    expect(name).toBeDefined();
  });
  test('check if it is truthy', () => {
    render(<CustomizedRadios />);
    const name = screen.getByTestId('radioButton');
    expect(name).toBeTruthy();
  });
});

