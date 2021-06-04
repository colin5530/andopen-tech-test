import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Birthday Coupon Cost Analysis/i);
  expect(titleElement).toBeInTheDocument();
});
