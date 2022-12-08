## Button Primary
```tsx
import { ButtonType } from '../../types';
<SbButton buttonType={ButtonType.Primary}>Button</SbButton>
```

## Button Disabled
```tsx
import { ButtonType } from '../../types';
<SbButton disabled={true} buttonType={ButtonType.Primary}>Button Disabled</SbButton>
```

## Button with Icon
```tsx
import SbIcon from '../SbIcon/SbIcon';
import { ButtonType, IconNames } from '../../types';

<SbButton
  buttonType={ButtonType.Primary}
  icon={
    <SbIcon icon={IconNames.Back} />
  }
>
  Button with Icon
</SbButton>
```
