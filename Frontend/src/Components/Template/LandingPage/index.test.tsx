import { render, screen } from '@testing-library/react'
import { LandingTemplate } from './index'
import HomePageStepper from "../../Organisms/Stepper";
import { ReactComponent as Logo } from "../../../images/icons/logo-1.svg";
import { BrowserRouter } from 'react-router-dom';

const fun=()=>{
    render(<BrowserRouter>
              <LandingTemplate homestepper={<HomePageStepper />} Logo={<Logo width={"205"} height={"40"} />} />
        </BrowserRouter>)
}
it('stepper should render',() => {
    fun()
    const landingTemplate = screen.getByTestId('steppertemp')
    expect(landingTemplate).toBeInTheDocument()
})

it('logo should render',() => {
    fun()
    const landingTemplate = screen.getByTestId('logo')
    expect(landingTemplate).toBeInTheDocument()
})