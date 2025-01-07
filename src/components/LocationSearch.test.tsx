import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import LocationSearch from './LocationSearch';

describe('Location Search', () => {
  it('renders the Location Search component', () => {
    render(<LocationSearch onPlaceClick={vi.fn()}/>)

    expect(true).toBe(true);
  })
})