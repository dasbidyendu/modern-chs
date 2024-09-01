"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "1000px",
};

interface MapProps {
  type: string;
}

const Map = (props: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  // On map load
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    // Use browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(userLocation);
        map.setCenter(userLocation);

        // Create marker for user's current location
        new google.maps.Marker({
          position: userLocation,
          map,
          title: "You are here",
        });

        // Request nearby hospitals
        const service = new google.maps.places.PlacesService(map);
        const request = {
          location: userLocation,
          radius: 5000, // Search within 5km
          type: `${props.type}`,
        };

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const newMarkers = results?.map((place) => {
              return new google.maps.Marker({
                position: place.geometry!.location!,
                map,
                title: place.name,
              });
            });
            setMarkers(newMarkers);
          } else {
            setMarkers([]);
          }
        });
      });
    }
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.getPosition()!} />
      ))}
    </GoogleMap>
  );
};

export default Map;
