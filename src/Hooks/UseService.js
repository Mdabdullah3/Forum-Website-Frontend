import { useEffect } from "react";
import { useState } from "react";

const UseService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://uiu-club-forums.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  return [service];
};

export default UseService;
