import React, { useState } from 'react';
import { Radio, Select, Slider } from 'antd';
import { useGenderFilter, useRegionFilter, useSpendFilter } from '../../userDataContext';
import './FilterBar.css';

const { Option } = Select;

const FilterBar = () => {
  const className = 'c-FilterBar';
  // Get functions for updating filters from context
  const {setSpendFilterValue} = useSpendFilter();
  const {setRegionFilterValue} = useRegionFilter();
  const {setGenderFilterValue} = useGenderFilter();
  const [sliderValue, setSliderValue] = useState([0, 5000]);
  const regions = ['EMEA', 'APAC', 'NAM', 'LATAM'];

  const handleSliderChange = (val) => {
    setSliderValue(val);
  }

  const handleAfterSliderChange = (val) => {
    // Update spend filter in context
    setSpendFilterValue(val);
  }

  const handleRegionChange = (val) => {
    // Update region filter in context
    setRegionFilterValue(val);
  }

  const handleGenderChange = (e) => {
    // Update gender filter in context
    setGenderFilterValue(e.target.value);
  }

  return (
    <div className={`${className}`}>
      <div className={`${className}-spend-container`}>
        <span className={`${className}-filter-title`}>Spend: </span>{`€${sliderValue[0]} - €${sliderValue[1]}`}
        <div className={`${className}-filter-input`}>
          <Slider
            className={`${className}-spend-slider`}
            range
            min={0}
            max={5000}
            marks={{ 0: '€0', 5000: '€5000' }}
            value={[...sliderValue]}
            onChange={handleSliderChange}
            onAfterChange={handleAfterSliderChange}
            tipFormatter={(value) => `€${value}`}
          />
        </div>
      </div>
      <div className={`${className}-region-container`}>
        <span className={`${className}-filter-title`}>Region</span>
        <div className={`${className}-filter-input`}>
          <Select
            className={`${className}-region-select`}
            mode="multiple"
            showArrow
            style={{ width: '100%' }}
            placeholder="Region"
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <Option key={region}>{region}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={`${className}-gender-container`}>
        <span className={`${className}-filter-title`}>Gender</span>
        <div className={`${className}-filter-input`}>
          <Radio.Group
            className={`${className}-gender-radios`}
            name='gender-radio-group'
            onChange={handleGenderChange}
            defaultValue='ALL'
          >
            <Radio value='ALL'>All</Radio>
            <Radio value='MALE'>Male</Radio>
            <Radio value='FEMALE'>Female</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
};

export default FilterBar;