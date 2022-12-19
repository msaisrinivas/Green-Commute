import { render, screen } from '@testing-library/react';
import AqiImage from './AqiImage';

it('renders images', () => {
  render(
    <AqiImage src={'mapview.png'} height={0} width={0}></AqiImage>,
  );

  const image = screen.getByTestId('image-box');
  expect(image.style.backgroundImage).toBe("url(mapview.png)");
});
