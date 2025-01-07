import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { search } from './api/search';
import { vi } from 'vitest';
import App from './App'
import type { Place } from "./api/Place";

const mockedSearchPlaces: Place[] = [
  { 
    id: 1,
    name: 'loc1',
    longitude: 1.11,
    latitude: 1.11
  }, 
  {
    id: 2,
    name: 'loc2',
    longitude: 2.22,
    latitude: 2.22
  }
];

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByText('Found locations:')).toBeNull();
    const locateButtons = screen.queryByText('locate', { selector: 'button' });
    expect(locateButtons).toBeNull();

    expect(screen.getByRole('button',  { name: 'Zoom in', } )).toBeInTheDocument();
    expect(screen.getByRole('button',  { name: 'Zoom out', } )).toBeInTheDocument();
  })

  it.skip('displays no results if search returns empty places list', async () => {

    vi.doMock('./api/search', () => ({
      search: () => []
    }));
    const { search } = await import('./api/search');
    render(<App />)

    const searchSimon1 = await search('Hung Hom');
    console.log('searchSimon1:', searchSimon1);
    const searchBox = screen.getByRole('textbox'); 
    await act(async () => {
      await userEvent.type(searchBox, 'New York{Enter}');
    });
    await expect(searchBox).toHaveValue('New York');
    await expect(screen.queryByText('Found locations:')).toBeNull();
  })

  it('searches for locations and displays search results', async () => {

    vi.doMock('./api/search', () => ({
      search: () => mockedSearchPlaces
    }));
    const { search } = await import('./api/search');
    render(<App />)

    const searchSimon2 = await search('New York');
    
    console.log('searchSimon2:', searchSimon2);

    const searchBox = screen.getByRole('textbox'); 
    await act(async () => {
      await userEvent.type(searchBox, 'New York{Enter}');
      await expect(searchBox).toHaveValue('New York');
    });
    // await screen.debug();
    await expect(screen.findByText('Found locations:')).not.toBeNull();
    await console.log((await screen.findByText('Found locations:')).outerHTML);

  })
  
afterEach(() => {
    vi.clearAllMocks(); // or vi.resetAllMocks();
  });
})