// UserProvider.js or relevant context file
import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorageUser, setLocalStorageUser, removeLocalStorageUser } from '../util/localstorage';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check local storage for user data during initialization
  useEffect(() => {
    const userFromLocalStorage = getLocalStorageUser();
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);

  // Function to handle user login
  const loginUser = (userData) => {
    setUser(userData);
    setLocalStorageUser(userData); // Update local storage on login
  };

  // Function to handle user logout
  const logoutUser = () => {
    setUser(null);
    removeLocalStorageUser(); // Remove user data from local storage on logout
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
