import 'leaflet/dist/leaflet.css';
import type { Place }  from '../api/Place';
import { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type MapProps = {
    place: Place | null
};

const Map = ({ place } : MapProps) => {
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (mapRef.current && place) {mapRef.current.flyTo([place.latitude, place.longitude]); }
    }, [place]);
    return <MapContainer
        ref={mapRef}
        center={[51.5, -0.13]}
        zoom={12}
        scrollWheelZoom
        className='h-full'
    >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
};

export default Map;