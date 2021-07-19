import { render, screen } from '@testing-library/react';
import HomesGuestsLoves from './components/HomesGuestsLoves';

test('renders learn react link', () => {
  render(<HomesGuestsLoves />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
