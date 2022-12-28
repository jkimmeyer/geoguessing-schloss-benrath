import inputStyles from './SbInput.module.css';

interface Props {
  label: string,
  placeholder: string,
  type: string,
}

const SbInput: React.FC<Props> = ({
  label,
  placeholder,
  type
}) => {
  return (
    <div className={inputStyles["input"]}>
      <label className={inputStyles["input--label"] + " | sr-only"} >{label}</label>
      <input className={inputStyles["input--field"]} placeholder={placeholder} type={type} />
    </div>
  );
}

export default SbInput;
