import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  test('Clicking on "STARSHIPS" shows alert message if not logged in', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    localStorage.removeItem('loggedInUser');
    const starshipsLink = screen.getByText('STARSHIPS');
    fireEvent.click(starshipsLink);

    const alertMessage = screen.getByText(/only registered users can see this content\./i);
    expect(alertMessage).toBeInTheDocument();
  });
});
