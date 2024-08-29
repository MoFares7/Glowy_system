import React, { useEffect, useRef, useState } from "react"; 
import "./map.css";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { Box } from "@mui/material";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);
  const [zoom] = useState(18);
  const [lng, setLng] = useState(47.990341);
  const [lat, setLat] = useState(29.378586);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // stops map from initializing more than once and checks for mapContainer

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=R7U57HvtQcvK4GqOK2kU`,
      center: [lng, lat],
      zoom: zoom,
    });

    marker.current = new maplibregl.Marker({
      color: "#FF0000",
    })
      .setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on("click", (e) => {
      const { lngLat } = e;
      const newLng = lngLat.lng;
      const newLat = lngLat.lat;

      // Update the marker's position
      if (marker.current) {
        marker.current.setLngLat([newLng, newLat]);
      }

      // Update the state with new coordinates
      setLng(newLng);
      setLat(newLat);
    });
  }, [lng, lat, zoom]);

  return (
    <Box className="map-wrap">
      <Box ref={mapContainer} className="map" />
    </Box>
  );
}
