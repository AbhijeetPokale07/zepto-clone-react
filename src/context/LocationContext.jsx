import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationContext = createContext();

// ✅ Custom hook (optional but recommended)
export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    try {
      setOpenDropdown(false);
      const pos = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );

      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      // const url1 =`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      const { data } = await axios.get(url);
      // console.log(data);
      setLocation(data.address);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{ location, getLocation, openDropdown, setOpenDropdown }}
    >
      {children}
    </LocationContext.Provider>
  );
};
