import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState('Ignacio')
  const [result, setResult] = useState(parseFloat(localStorage.getItem('result')) || 0)
  localStorage.setItem('result', result)

  return (
    <UserContext.Provider value={{ user, setUser, result, setResult}}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
