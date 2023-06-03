import { FC, memo } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useGeocode } from "../../../hooks/useGeocode";
import { Typography } from "@mui/material";

interface Props {
  address: string;
}

const Map: FC<Props> = memo(({ address }) => {
  const center = useGeocode(address);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  if (!isLoaded)
    return (
      <Typography variant="h4" color="primary" sx={{ mt: 3 }}>
        Loading...
      </Typography>
    );

  return (
    <>
      {center == null ? (
        <Typography variant="body1" color="error">
          We can´t find the location
        </Typography>
      ) : (
        <GoogleMap
          zoom={10}
          center={center && center}
          mapContainerStyle={{ width: "100%", height: "350px" }}
        >
          <MarkerF position={center && center} />
        </GoogleMap>
      )}
    </>
  );
});

export default Map;
