import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the header', () => {
  render(<App />);
  const linkElement = screen.getByText(/GraphQL Task/i);
  expect(linkElement).toBeInTheDocument();
});