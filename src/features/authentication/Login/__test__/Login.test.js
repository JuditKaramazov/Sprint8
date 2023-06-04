import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../Login';

test('updating form inputs should update the state', () => {
  const { getByPlaceholderText } = render(<Login />);
  const emailInput = screen.getByPlaceholderText('Email Address');
  const passwordInput = screen.getByPlaceholderText('Password');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password123');
});
