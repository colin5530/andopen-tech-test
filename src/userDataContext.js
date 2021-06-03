import React, { useContext, useReducer } from 'react';
import userData from './userData.json';

const UserDataContext = React.createContext();

const initialState = {
  totalUsers: userData.userData,
  visibleUsers: userData.userData,
  spendFilterValue: [0, 5000],
  regionFilterValue: [],
  genderFilterValue: [],
};

const applyFilters = ({totalUsers, spendFilterValue, regionFilterValue, genderFilterValue}) => {
  return totalUsers.filter((user) => {
    return user.spend >= spendFilterValue[0] && user.spend <= spendFilterValue[1];
  }).filter((user) => {
    if (regionFilterValue.length === 0) return true;
    return [...regionFilterValue].includes(user.region);
  }).filter((user) => {
    if (genderFilterValue === 'ALL') return true;
    return genderFilterValue === user.gender;
  });
}

const UserDataReducer = (state, action) => {
  switch (action.type) {
    case 'updateSpendFilter': {
      const filteredUsers = applyFilters(Object.assign({...state}, {spendFilterValue: action.payload}));

      return Object.assign({...state}, {visibleUsers: filteredUsers, spendFilterValue: action.payload})
    }
    case 'updateRegionFilter': {
      const filteredUsers = applyFilters(Object.assign({...state}, {regionFilterValue: action.payload}));

      return Object.assign({...state}, {visibleUsers: filteredUsers, regionFilterValue: action.payload})
    }
    case 'updateGenderFilter': {
      const filteredUsers = applyFilters(Object.assign({...state}, {genderFilterValue: action.payload}));

      return Object.assign({...state}, {visibleUsers: filteredUsers, genderFilterValue: action.payload})
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

const useRegionFilter = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useRegionFilter must be used within a UserDataProvider');
  }
  return {regionFilterValue: context.state.regionFilterValue, setRegionFilterValue: (payload) => context.dispatch({ type: 'updateRegionFilter', payload})};
}

const useGenderFilter = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useGenderFilter must be used within a UserDataProvider');
  }
  return {genderFilterValue: context.state.genderFilterValue, setGenderFilterValue: (payload) => context.dispatch({ type: 'updateGenderFilter', payload})};
}

export {
  UserDataProvider,
  useUserData,
  useSpendFilter,
  useRegionFilter,
  useGenderFilter,
}