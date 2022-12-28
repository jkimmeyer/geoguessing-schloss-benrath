import buttonStyles from './SbButton.module.css';
import { ButtonType } from '../../types';
import Link from 'next/link';

interface Props {
  buttonType?: ButtonType;
  buttonSize?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  forceReload?: boolean;
  href?: string;
  onClick?: () => void;
}

const SbButton: React.FC<Props> = ({
  buttonSize,
  buttonType,
  children,
  disabled,
  onClick,
  icon,
  href,
}) => {
  if (href) {
    return (
      <Link
        className={buttonStyles['sb-button']}
        href={href}
        data-primary={buttonType === ButtonType.Primary}
        data-secondary={buttonType === ButtonType.Secondary}
        data-size={buttonSize}
      >
        {icon}
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button
      className={buttonStyles['sb-button']}
      disabled={!!disabled}
      data-primary={buttonType === ButtonType.Primary}
      data-secondary={buttonType === ButtonType.Secondary}
      onClick={onClick}
      data-size={buttonSize}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default SbButton;
