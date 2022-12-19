import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import HomePageStepper from '.';
import { fireEvent } from '@storybook/testing-library';

const fun = () => {
  render(<BrowserRouter><HomePageStepper  /></BrowserRouter>)
}
describe('<Stepper tests>', () => {
  test('checks whether HomePageStepper component renders or not', () => {
    fun()
    expect(screen.getByTestId('stepper')).toBeInTheDocument();
  });

  test('checking fire next event', () => {
    fun()
    const nextStepperBtn = screen.getByTestId('btnNext');
    fireEvent.click(nextStepperBtn);
    expect(window.location.pathname).toBe('/')
    const textElement = screen.getByTestId('box1');
    expect(textElement).toBeInTheDocument();
  });

  test('checking fire back event', () => {
    fun()
    const nextStepperBtn = screen.getByTestId('btnNext');
    fireEvent.click(nextStepperBtn);
    const backStepperBtn = screen.getByTestId('btnBack');
    fireEvent.click(backStepperBtn);
    const textElement = screen.getByTestId('box1');
    expect(textElement).toBeInTheDocument();
  });
});