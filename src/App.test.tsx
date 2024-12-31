import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from './App'
// import Map from './components/Map';

// jest.mock('./components/Map');

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

   // screen.debug(); // prints out the jsx in the App component unto the command line

    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.queryByText('Found locations:')).toBeNull();
    const locateButtons = screen.queryByText('locate', { selector: 'button' });
    expect(locateButtons).toBeNull();

  })
})