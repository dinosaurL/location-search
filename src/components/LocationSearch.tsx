import type { Place }  from '../api/Place';
import { search } from '../api/search';

import { useState } from 'react';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void
};

const LocationSearch = ( { onPlaceClick } : LocationSearchProps) => {

    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
        // setTerm(event.target.value);
        setTerm(event.currentTarget.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        console.log(`Searching.... ${term}`);
        const results = await search(term);
        await console.log(`results:`, results);
        setPlaces(results);
    }

    const handleLocateClick = (place: Place) => {
        onPlaceClick(place);
    }

    console.log('places.length:', places.length);
    return (
        <div>
        {/* <form>  */}
        <form onSubmit={handleSubmit}>
            <label className='font-bold p-4' htmlFor='term'>Search</label>
            <input className='border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full' 
                id='term' type='text' 
                value={term}
            onChange={handleChange}
        />
        </form>
        
        {places.length > 0 && <div>
            <div className='font-bold mt-6'>Found locations:</div>
            {places.map((place) => <div key={place.id} className='p-4 font-light flex flex-row items-center justify-between'>
                <span className='mr-4 text-sm'>{place.name}</span>
                <button className='p-1 h-8 bg-blue-500 text-xs text-white rounded-md'
                    onClick={() => handleLocateClick(place)}>Locate</button>
            </div>)}
        </div>}
        </div>
    )
}


export default LocationSearch;