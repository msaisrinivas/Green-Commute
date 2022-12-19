import { fireEvent, render, screen } from '@testing-library/react';
import {UploadSuccess} from '.'

const uploadSuccess = () => {
    render(<UploadSuccess /> )
}

it('icon should render',() => {
    uploadSuccess()
    const icon = screen.getAllByAltText('Logo')[0] as HTMLAnchorElement;
    expect(icon).toBeInTheDocument();
})

it('close icon sholud render',() => {
    uploadSuccess()
    const text=screen.getByText(/Your Resume got Uploaded Successfully !/i);
    expect(text).toBeInTheDocument();
})

it('okay button should render',()=>{
    uploadSuccess()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
    fireEvent.click(button); 
})
