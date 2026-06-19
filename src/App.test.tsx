import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '@/App';

describe('LP Cartões Sicredi', () => {
  it('renders the campaign headline', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /peça seu cartão sicredi/i })).toBeInTheDocument();
  });
});
