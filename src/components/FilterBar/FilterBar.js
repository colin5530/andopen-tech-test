import React, { useState } from 'react';
import { Slider } from 'antd';
import { useUserData } from '../../userDataContext';
import './FilterBar.css';

const FilterBar = () => {
  const className = 'c-FilterBar';
  const {visibleUsers, setVisibleUsers} = useUserData();
  const [sliderValue, setSliderValue] = useState(500);

  return (
    <div className={`${className}`}>
      <div className={`${className}-slider-container`}>
        <Slider
          range
          defaultValue={[500, 5000]}
          min={0}
          max={5000}
          onChange={(val) => {
            setSliderValue(val);
          }}
        />
      </div>
      <div className={`${className}-region-container`}>
        Region
      </div>
      <div className={`${className}-gender-container`}>
        Gender
      </div>
    </div>
  )
};

export default FilterBar;