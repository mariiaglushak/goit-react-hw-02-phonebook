import PropTypes from 'prop-types';

import { LabelFilter, InputFilter } from './FilterStyle';

const Filter = ({ text, value, onChange }) => {
  return (
    <LabelFilter>
      {text}
      <InputFilter type="text" value={value} onChange={onChange} />
    </LabelFilter>
  );
};

export default Filter;

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
