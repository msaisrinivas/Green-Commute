import { fireEvent, render, screen } from '@testing-library/react';
import {SearchJob} from '.';

describe('Search Bar', () => {
  test('render whole organism', () => {
    render(<SearchJob skills={[]} locations={[]} getLoc = {()=>{}} getRole = {()=>{}} />);
    expect(screen.getByTestId('searchJob')).toBeInTheDocument();
  });

  test('render skill search field', () => {
    render(<SearchJob  skills={[]} locations={[]} getLoc = {()=>{}} getRole = {()=>{}} />);
    expect(screen.getByTestId('skill')).toBeInTheDocument();
  });

  test('render location search field', () => {
    render(<SearchJob  skills={[]} locations={[]} getLoc = {()=>{}} getRole = {()=>{}} />);
    expect(screen.getByTestId('location')).toBeInTheDocument();
    const InputBaseElement0 = screen.getAllByRole("combobox")[0];
    fireEvent.change(InputBaseElement0,{target:{value:"Hyderabad"}})
    const InputBaseElementAfterFire0 = screen.getAllByRole("button")[0];
    fireEvent.click(InputBaseElementAfterFire0)
  });
  test('icon button should render',()=>{
    render(<SearchJob  skills={[]} locations={[]} getLoc = {()=>{}} getRole = {()=>{}} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
  })

});