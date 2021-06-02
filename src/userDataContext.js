import React, { useContext, useState } from 'react';
import userData from './userData.json';

const UserDataContext = React.createContext();

const UserDataProvider = ({children}) => {
  const [visibleUsers, setVisibleUsers] = useState(userData.userData);
  const value = {visibleUsers, setVisibleUsers};
  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}

const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
}

export {
  UserDataProvider,
  useUserData,
}