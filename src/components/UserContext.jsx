import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage();

  const updateUser = data => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ userData: user, updateUser }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
