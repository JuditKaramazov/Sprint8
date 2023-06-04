import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StarshipData } from '../StarshipData';

test('StarshipData component renders correctly', () => {
  const starship = {
    url: 'https://swapi.dev/api/starships/9/',
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
  };

  render(
    <BrowserRouter>
      <StarshipData {...starship} />
    </BrowserRouter>
  );

  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveAttribute('href', '/starships/9');

  const nameElement = screen.getByText('Death Star');
  expect(nameElement).toBeInTheDocument();

  const modelElement = screen.getByText('DS-1 Orbital Battle Station');
  expect(modelElement).toBeInTheDocument();
});
