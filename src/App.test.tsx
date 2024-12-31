import '@testing-library/jest-dom';
// import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import App from './App'
// import Map from './components/Map';

// jest.mock('./components/Map');

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

   // screen.debug(); // prints out the jsx in the App component unto the command line
    console.log('simon:---', expect);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    // expect(Map).toHaveBeenCalled();
  })
})