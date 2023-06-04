import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from '../SignUp';

test('sign up form submission adds user to localStorage', () => {
  // Mocks window.alert.
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  const closeModal = jest.fn();

  render(
    <BrowserRouter>
      <SignUp closeModal={closeModal} />
    </BrowserRouter>
  );

  const nameInput = screen.getByPlaceholderText('Name');
  const emailInput = screen.getByPlaceholderText('Email Address');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByRole('button', { name: 'Sign Up' });

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  const users = JSON.parse(localStorage.getItem('userSaved'));
  expect(users).toHaveLength(1);

  const user = users[0];
  expect(user.name).toBe('John Doe');
  expect(user.email).toBe('john.doe@example.com');
  expect(user.password).toBe('password123');

  expect(closeModal).toHaveBeenCalledTimes(1);
  expect(alertMock).toHaveBeenCalledWith(`Successfully registered, John Doe!`);

  // Restores the original implementation of window.alert.
  alertMock.mockRestore();
});
