import { useEffect, useState } from 'react';

const useLocalStorage = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return [user, setUser];
};

export default useLocalStorage;
