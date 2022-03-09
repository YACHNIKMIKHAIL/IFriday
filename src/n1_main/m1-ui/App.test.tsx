import React from 'react';
import { render, screen } from '@testing-library/react';
import AppSerge from "./app/AppSerge";

test('renders learn react link', () => {
  render(<AppSerge />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
