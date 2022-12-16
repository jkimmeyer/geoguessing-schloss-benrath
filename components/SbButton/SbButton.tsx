import buttonStyles from './SbButton.module.css';
import { ButtonType } from '../../types';
import Link from 'next/link';
import { Url } from 'url';

interface Props {
  buttonType?: ButtonType;
  disabled?: Boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const SbButton: React.FC<Props> = ({
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
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default SbButton;
