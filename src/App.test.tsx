import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from './App'
// import Map from './components/Map';

// jest.mock('./components/Map');

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.queryByText('Found locations:')).toBeNull();
    const locateButtons = screen.queryByText('locate', { selector: 'button' });
    expect(locateButtons).toBeNull();

    expect(screen.getByRole('button',  { name: 'Zoom in', } )).toBeInTheDocument();
    expect(screen.getByRole('button',  { name: 'Zoom out', } )).toBeInTheDocument();
  })
})