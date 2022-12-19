import { render, screen } from '@testing-library/react'
import {Location} from "./index"

const LocationCard = () => {
    render( <Location /> )
}

it('Current location should render', () => {
    LocationCard()
    const text=screen.getByText(/E Maredpally,Secundrabad/i);
    expect(text).toBeInTheDocument();
})

it('location should render', () => {
    LocationCard()
    const text=screen.getByText(/Hitech City, Telangana, Hyderabad/i);
    expect(text).toBeInTheDocument();
})

it('current location icon should render',()=>{
    LocationCard()
    const icon = screen.getByTestId('currentLoc')
    expect(icon).toBeInTheDocument()
})

it('location icon should render',()=>{
    LocationCard()
    const icon = screen.getByTestId('locationLogo')
    expect(icon).toBeInTheDocument()
})

it('swap icon should render',()=>{
    LocationCard()
    const icon = screen.getByTestId('swap')
    expect(icon).toBeInTheDocument()
})

