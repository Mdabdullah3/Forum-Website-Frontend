import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const UseUserData = () => {
  const [user] = useAuthState(auth);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `https://uiu-club-forums.onrender.com/service/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);
  return [userData];
};

export default UseUserData;
