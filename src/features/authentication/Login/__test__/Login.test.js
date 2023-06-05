import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Login } from '../Login';

describe('Login', () => {
  it('should display an alert for incorrect credentials', async () => {
    const closeModalMock = jest.fn();
    const handleLogInMock = jest.fn();
    const openRegistrationModalMock = jest.fn();

    const { getByPlaceholderText, getByText, queryByText } = render(
      <MemoryRouter>
        <Login
          closeModal={closeModalMock}
          handleLogIn={handleLogInMock}
          openRegistrationModal={openRegistrationModalMock}
        />
      </MemoryRouter>
    );

    // Fills in the form input with incorrect credentials.
    fireEvent.change(getByPlaceholderText('Email Address'), { target: { value: 'invalid@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    //Submits the form.
    fireEvent.submit(getByPlaceholderText('Email Address'));

    await waitFor(() => {
      expect(queryByText('Incorrect credentials. Please, try again.')).toBeInTheDocument();
    });

    expect(handleLogInMock).not.toHaveBeenCalled();
    expect(closeModalMock).not.toHaveBeenCalled();
  });
});
