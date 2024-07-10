import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './home';

jest.mock('../components/table', () => () => <div data-testid="beautiful-table">Beautiful Table</div>);

describe('Home Component', () => {
  test('renders initial state correctly', () => {
    render(<Home />);

    expect(screen.getByAltText('Landing Page')).toBeInTheDocument();
    expect(screen.queryByTestId('beautiful-table')).toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
  });

  test.skip('clicking the image triggers the sliding up', async () => {
    render(<Home />);

    const image = screen.getByAltText('Landing Page');
    
    await act(async () => {
      fireEvent.click(image);
      await new Promise((r) => setTimeout(r, 1600)); // Ensure the timeout is longer than the animation duration
    });
    
    expect(screen.getByTestId('beautiful-table')).toBeInTheDocument();
  });

  test.skip('fade-in effect on table display', async () => {
    render(<Home />);

    const image = screen.getByAltText('Landing Page');
    
    await act(async () => {
      fireEvent.click(image);
      await new Promise((r) => setTimeout(r, 1600)); // Ensure the timeout is longer than the animation duration
    });

    const table = screen.getByTestId('beautiful-table');
    expect(table).toHaveClass('opacity-100');
  });

  test.skip('clicking the up button hides the table', async () => {
    render(<Home />);

    const image = screen.getByAltText('Landing Page');
    
    await act(async () => {
      fireEvent.click(image);
      await new Promise((r) => setTimeout(r, 1600)); // Ensure the timeout is longer than the animation duration
    });

    const upButton = screen.getByRole('button', { hidden: true });
    
    await act(async () => {
      fireEvent.click(upButton);
      await new Promise((r) => setTimeout(r, 1600)); // Ensure the timeout is longer than the animation duration
    });

    expect(screen.queryByTestId('beautiful-table')).toBeNull();
  });
});
