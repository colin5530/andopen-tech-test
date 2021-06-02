import React, { useState } from 'react';
import { Slider } from 'antd';
import { useSpendFilter } from '../../userDataContext';
import './FilterBar.css';

const FilterBar = () => {
  const className = 'c-FilterBar';
  const {setSpendFilterValue} = useSpendFilter();
  const [sliderValue, setSliderValue] = useState([0, 5000]);

  const handleSliderChange = (val) => {
    setSliderValue(val);
  }

  const handleAfterSliderChange = (val) => {
    setSpendFilterValue(val);
  }

  return (
    <div className={`${className}`}>
      <div className={`${className}-slider-container`}>
        <Slider
          range
          min={0}
          max={5000}
          value={[...sliderValue]}
          onChange={handleSliderChange}
          onAfterChange={handleAfterSliderChange}
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