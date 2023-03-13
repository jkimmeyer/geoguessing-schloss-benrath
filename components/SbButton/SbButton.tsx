import buttonStyles from './SbButton.module.css';
import { ButtonSize, ButtonType } from '../../types';
import Link from 'next/link';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes < HTMLButtonElement > {
  buttonType?: ButtonType;
  buttonSize?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  forceReload?: boolean;
  href?: string;
  iconOnly?: boolean;
}

const SbButton: React.FC<Props> = ({
  buttonSize = ButtonSize.Medium,
  buttonType = ButtonType.Primary,
  children,
  disabled,
  icon,
  iconOnly = false,
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
        { !iconOnly &&
          <span>{children}</span>
        }
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
      { !iconOnly &&
        <span>{children}</span>
      }
    </button>
  );
}

export default SbButton;
