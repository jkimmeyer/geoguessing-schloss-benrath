import buttonStyles from './SbButton.module.css';
import { ButtonType } from '../../types';
import Link from 'next/link';

interface Props extends React.ButtonHTMLAttributes < HTMLButtonElement > {
  buttonType?: ButtonType;
  buttonSize?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  forceReload?: boolean;
  href?: string;
}

const SbButton: React.FC<Props> = ({
  buttonSize,
  buttonType,
  children,
  disabled,
  icon,
  href,
  ...props
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
      data-size={buttonSize}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default SbButton;
