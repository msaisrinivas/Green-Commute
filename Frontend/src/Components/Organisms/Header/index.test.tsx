import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '.';

it('checks whether header component renders or not', () => {
  render(<Header location='panjagutta'/>);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  const svgElements = screen.getAllByTestId("svgIcon")
  expect(svgElements.length).toBe(5);

});