import { render, screen } from '@testing-library/react'
import { Icons } from '.'
import BikeIcon from '../../../images/icons/bike.svg'

describe("Display logo", () => {
    test("Should display logo", () => {
        render(<Icons source={BikeIcon} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('alt', 'Logo');
    })
})