import { fireEvent, render, screen } from "@testing-library/react";
import {Upload} from '.'

const Resume = () => {
    render( <Upload /> )
}

it("Save Button", () => {
    Resume()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
})
