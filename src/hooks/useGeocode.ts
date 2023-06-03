import { useState, useEffect } from "react";
import Geocode from "react-geocode";

interface GeoCodeState {
  lat: number;
  lng: number;
}

export const useGeocode = (address: string) => {
  const [center, setCenter] = useState<GeoCodeState | null>({ lat: 0, lng: 0 });

  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);

  useEffect(() => {
    const getCenter = async () => {
      try {
        const response = await Geocode.fromAddress(address);
        const { lat, lng } = await response.results[0].geometry.location;
        setCenter(() => ({ lat, lng }));
      } catch (err) {
        setCenter(null);
      }
    };
    getCenter();
  }, [address]);

  return center;
};
