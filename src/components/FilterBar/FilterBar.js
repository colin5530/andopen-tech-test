import React, { useState } from 'react';
import { Radio, Select, Slider } from 'antd';
import { useGenderFilter, useRegionFilter, useSpendFilter } from '../../userDataContext';
import './FilterBar.css';

const { Option } = Select;

const FilterBar = () => {
  const className = 'c-FilterBar';
  const {setSpendFilterValue} = useSpendFilter();
  const {setRegionFilterValue} = useRegionFilter();
  const {setGenderFilterValue} = useGenderFilter();
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

  const handleGenderChange = (e) => {
    setGenderFilterValue(e.target.value);
  }

  return (
    <div className={`${className}`}>
      <div className={`${className}-spend-container`}>
        <span className={`${className}-filter-title`}>Spend: </span>
        <span data-testid='min-value'>€{sliderValue[0]}</span> - <span data-testid='max-value'>€{sliderValue[1]}</span>
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
            <Radio value='MALE' onKeyDown={(e) => console.log('e', e)}>Male</Radio>
            <Radio value='FEMALE'>Female</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
};

export default FilterBar;