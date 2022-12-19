import { render, screen } from '@testing-library/react';
import { CheckBoxText } from '.';

describe('Atoms', () => {
    test('renders input field', () => {
        render(<CheckBoxText label={"sample"} />);
        expect(screen.getByLabelText("sample")).toBeInTheDocument();
    })
});
