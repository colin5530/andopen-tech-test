import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Birthday Coupon Cost Analysis/i);
  expect(titleElement).toBeInTheDocument();
});
