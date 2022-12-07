import { Icon } from '@iconify/react';
import { IconNames } from '../../types/iconNames'

interface Props {
  icon: IconNames
}

const SbIcon: React.FC<Props> = ({
  icon
}) => {
  return (
    <Icon icon={icon} />
  );
}

export default SbIcon;
