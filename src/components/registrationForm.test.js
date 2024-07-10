import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RegistrationForm from './registrationForm';

describe('RegistrationForm', () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
    );
  };

  test('renders the registration form with all fields and submit button', () => {
    setup();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  test('shows validation errors on submit with empty fields', async () => {
    setup();
    
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
    });

    expect(await screen.findByText(/username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
  });

  test('shows validation error for invalid email format', async () => {
    setup();

    await act(async () => {
      userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
    });

    expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
  });

  test('shows validation error for invalid phone number format', async () => {
    setup();

    await act(async () => {
      userEvent.type(screen.getByLabelText(/phone number/i), '123');
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
    });

    expect(await screen.findByText(/phone number must be 10 digits/i)).toBeInTheDocument();
  });

});
