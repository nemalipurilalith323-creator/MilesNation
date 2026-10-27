import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('MilesNation app shell', () => {
  it('renders the homepage hero content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Every Mile Counts/i)).toBeInTheDocument();
    expect(screen.getByText(/Every Runner Matters/i)).toBeInTheDocument();
  });
});
