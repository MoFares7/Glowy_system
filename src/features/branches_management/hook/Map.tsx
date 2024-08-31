import React, { useEffect, useRef, useState } from "react";
import "../style/map.css";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { Box } from "@mui/material";

interface MapProps {
  onLocationChange: (lat: number, lng: number) => void;
}

export default function Map({ onLocationChange }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);
  const [zoom] = useState(18);
  const [lng, setLng] = useState(47.990341);
  const [lat, setLat] = useState(29.378586);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

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

      setLng(newLng);
      setLat(newLat);

      onLocationChange(newLat, newLng);
    });
  }, [lng, lat, zoom, onLocationChange]);

  return (
    <Box className="map-wrap">
      <Box ref={mapContainer} className="map" />
    </Box>
  );
}
