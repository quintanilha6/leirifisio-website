import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Leirifisio hero content', () => {
  const { getAllByText } = render(<App />);
  const heading = getAllByText(/Centro de Fisioterapia e Movimento/i)[0];
  expect(heading).toBeInTheDocument();
});
