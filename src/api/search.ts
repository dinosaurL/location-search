import type { Place } from "./Place";

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

export const search = async (term: string, limit=10) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&limit=${limit}&format=geojson&layer=address&addressdetails=1`);
    const data: SearchResponse =  await res.json();
    // console.log('data:', data);
    const places: Place[] = data.features.map(feature => ({
        id: feature.properties.place_id,
        name: feature.properties.display_name,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1]
    }));
    // console.log('places:', places);
    return places
}; 