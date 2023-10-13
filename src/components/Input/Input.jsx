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
