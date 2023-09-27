import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState('Ignacio');
  const [result, setResult] = useState(0)

  return (
    <UserContext.Provider value={{ user, setUser, result, setResult}}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
