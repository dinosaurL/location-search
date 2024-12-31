import { useState } from 'react';
import type { Place }  from './api/Place';
import LocationSearch from './components/LocationSearch';
import Map from './components/Map';

function App() {

  const [place, setPlace] = useState<Place | null>(null);

  const handleClick =  (location: Place) => {
    // console.log('ded:', location);
    setPlace(location);

}

  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className='col-span-3 p-2'><LocationSearch onPlaceClick={handleClick} /></div>
      <div className='col-span-9'><Map place={place} /></div>
    </div>
  )
}

export default App
