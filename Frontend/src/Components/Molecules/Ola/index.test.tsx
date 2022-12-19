import { render, screen } from '@testing-library/react';
import { OlaCard } from '.';

const bookNowCard = () => {
    render(
        <OlaCard 
            Icon={'images/icons/ola.svg'}
        ></OlaCard>
    );
}

it('Icon' , ()=>{
    bookNowCard();
    const icon = screen.getAllByAltText('Logo')[0] as HTMLAnchorElement;
    expect(icon).toBeInTheDocument();
});

it('Ola text', ()=>{
    bookNowCard();
    const text=screen.getByText(/Ola/i);
    expect(text).toBeInTheDocument();
});

it('Book now text', ()=>{
    bookNowCard();
    const text2=screen.getByText(/Book Now/i);
    expect(text2).toBeInTheDocument();
});
