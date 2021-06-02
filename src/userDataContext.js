import React, { useContext, useReducer } from 'react';
import userData from './userData.json';

const UserDataContext = React.createContext();

const initialState = {
  totalUsers: userData.userData,
  visibleUsers: userData.userData,
  spendFilterValue: [0, 5000],
};

const UserDataReducer = (state, action) => {
  switch (action.type) {
    case 'updateSpendFilter': {
      const filteredUsers = state.totalUsers.filter((user) => {
        return user.spend >= action.payload[0] && user.spend <= action.payload[1];
      })

      return Object.assign({...state}, {visibleUsers: filteredUsers, spendFilterValue: action.payload})
    }
    case 'updateVisibleUsers': {
      return Object.assign({...state}, {visibleUsers: action.payload});
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UserDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(UserDataReducer, initialState);
  const value = { state, dispatch };
  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}

const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return {visibleUsers: context.state.visibleUsers, setVisibleUsers: (payload) => context.dispatch({ type: 'updateVisibleUsers', payload})};
}

const useSpendFilter = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useSpendFilter must be used within a UserDataProvider');
  }
  return {spendFilterValue: context.state.spendFilterValue, setSpendFilterValue: (payload) => context.dispatch({ type: 'updateSpendFilter', payload})};
}

export {
  UserDataProvider,
  useUserData,
  useSpendFilter,
}