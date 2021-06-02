import React, { useState } from 'react';
import { Select, Slider } from 'antd';
import { useRegionFilter, useSpendFilter } from '../../userDataContext';
import './FilterBar.css';

const { Option } = Select;

const FilterBar = () => {
  const className = 'c-FilterBar';
  const {setSpendFilterValue} = useSpendFilter();
  const {setRegionFilterValue} = useRegionFilter();
  const [sliderValue, setSliderValue] = useState([0, 5000]);
  const regions = ['EMEA', 'APAC', 'NAM', 'LATAM'];

  const handleSliderChange = (val) => {
    setSliderValue(val);
  }

  const handleAfterSliderChange = (val) => {
    setSpendFilterValue(val);
  }

  const handleRegionChange = (val) => {
    setRegionFilterValue(val);
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
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Region"
          onChange={handleRegionChange}
        >
          {regions.map((region) => (
            <Option key={region}>{region}</Option>
          ))}
        </Select>
      </div>
      <div className={`${className}-gender-container`}>
        Gender
      </div>
    </div>
  )
};

export default FilterBar;