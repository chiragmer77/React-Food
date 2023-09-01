import React, { useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const LocationSearch = () => {
  const [place, setPlace] = useState("");

  const handlePlaceSelect = (place) => {
    setPlace(place.formatted_address);
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyA0UY4lkKsTqJCv0zNNX0B6DGL6WA7MSFM"
        libraries={["places"]}
      >
        <Autocomplete onLoad={handlePlaceSelect}>
          <input
            type="text"
            placeholder="Search Location"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </Autocomplete>
        <button type="submit" class="site-btn">
          SEARCH
        </button>
      </LoadScript>
    </div>
  );
};

export default LocationSearch;
