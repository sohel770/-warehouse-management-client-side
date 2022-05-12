
import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  //state and Effect
  const [services, setService] = useState({});
  useEffect(() => {
    const url = `https://serene-inlet-21098.herokuapp.com/products/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [services];
};

export default useServiceDetails;
