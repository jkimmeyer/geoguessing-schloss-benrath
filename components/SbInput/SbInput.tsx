import { ChangeEventHandler } from 'react';
import inputStyles from './SbInput.module.css';

interface Props {
  label: string,
  placeholder: string,
  type: string,
  value: string,
  onChange: ChangeEventHandler,
}

const SbInput: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  onChange
}) => {
  return (
    <div className={inputStyles["input"]}>
      <label className={inputStyles["input--label"] + " | sr-only"} >{label}</label>
      <input
        className={inputStyles["input--field"]}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange} />
    </div>
  );
}

export default SbInput;
