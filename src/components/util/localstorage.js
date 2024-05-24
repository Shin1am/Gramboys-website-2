// utils/localStorage.js

// Function to set user data in local storage
export const setLocalStorageUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  // Function to get user data from local storage
  export const getLocalStorageUser = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  };
  
  // Function to remove user data from local storage
  export const removeLocalStorageUser = () => {
    localStorage.removeItem('user');
  };
  