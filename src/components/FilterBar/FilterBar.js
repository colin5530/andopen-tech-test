import React from 'react';
import { useUserData } from '../../userDataContext';

const FilterBar = () => {
  const {visibleUsers, setVisibleUsers} = useUserData();

  return (
    <div>
      Filters
    </div>
  )
};

export default FilterBar;