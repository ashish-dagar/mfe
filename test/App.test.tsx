import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/TO DO App/i);
  expect(linkElement).toBeInTheDocument();
});