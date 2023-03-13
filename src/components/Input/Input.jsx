import PropTypes from 'prop-types';

import { InputField } from './InputStyle';

const Input = ({ value, type, name, pattern, title, required, onChange }) => {
  return (
    <label>
      {name}
      <InputField
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
      />
    </label>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
