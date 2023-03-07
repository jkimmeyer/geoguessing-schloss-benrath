import { ChangeEventHandler, FocusEventHandler } from 'react';
import inputStyles from './SbInput.module.css';

interface Props {
  label: string,
  placeholder: string,
  type: string,
  value: string,
  withLoader?: boolean,
  required: boolean,
  onChange: ChangeEventHandler,
  onBlur?: FocusEventHandler,
}

const SbInput: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  withLoader = false,
  required,
  onChange,
  onBlur
}) => {
  return (
    <div className={inputStyles["input"]}>
      <label className={inputStyles["input--label"] + " | sr-only"} >{label}</label>
      <input
        className={inputStyles["input--field"]}
        data-with-loader={withLoader ? "" : null}
        placeholder={placeholder}
        value={value}
        type={type}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default SbInput;
