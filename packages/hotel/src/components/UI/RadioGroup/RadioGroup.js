import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioGroup = ({ options, ...props }) => {
  return (
    <Radio.Group {...props}>
      {options.map((item) => (
        <Radio.Button key={`${item.value}-${item.id}`} value={item.value}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default RadioGroup;
