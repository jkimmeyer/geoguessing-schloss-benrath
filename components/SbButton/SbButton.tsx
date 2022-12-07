import buttonStyles from './SbButton.module.css'
import { ButtonType } from '../../types'

interface Props {
  buttonType?: ButtonType;
  disabled?: Boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  buttonType,
  children,
  disabled,
  onClick,
  icon,
}) => {
  return (
    <button
      className={buttonStyles['sb-button']}
      disabled={!!disabled}
      data-primary={buttonType === ButtonType.Primary}
      data-secondary={buttonType === ButtonType.Secondary}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;
