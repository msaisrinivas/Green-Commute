import { fireEvent, render, screen } from '@testing-library/react'
import {DescCard} from '.'
import myntra from "../../../images/icons/myntra.svg"


const description = () => {
    render(<DescCard icon={myntra} 
        title={'User Experiance Designer'} 
        company={'Myntra'}
        address={'Hitech city, Hyderabad - 500072'}
        postedTime={'2 days ago'}
        isSaved={'Save'} 
         />)
}

it('buttons should render', () => {
    description()
    const button = screen.getAllByRole('button')[0] as HTMLButtonElement
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
})

it('Icons should render' , ()=>{
    description()
    const icon = screen.getAllByAltText('Logo')[0] as HTMLAnchorElement
    expect(icon).toBeInTheDocument()
})

it('description text should render' ,() => {
    description()
    const text=screen.getByTestId('text')
    expect(text).toBeInTheDocument()
})

it('Back Fire' ,() => {
    description()
    const text=screen.getByText("Green Commute Routes");
    fireEvent.click(text);
    const Back=screen.getAllByAltText("Logo")[2];
    fireEvent.click(Back);
    const after=screen.getByText("Green Commute Routes");
    expect(after).toBeInTheDocument()
})

it('Tabs fire' ,() => {
    description()
    const text=screen.getByText("Green Commute Routes");
    fireEvent.click(text);
    const Tab1=screen.getByText("busDesc.svg");
    fireEvent.click(Tab1);
    const Tab2=screen.getByText("carDesc.svg");
    fireEvent.click(Tab2);
    const ola = screen.getAllByText("Ola");
    expect(ola.length).toBe(3);
})