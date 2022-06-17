import { FC, memo } from 'react';

import { _NavMenuButton } from '../_NavMenuButton/_NavMenuButton';
import classes from './DropdownHeaderNavigation.module.css';

interface Props {
  className?: string;
  classes?: {
    header?: string;
    container?: string;
  };
}
export const DropdownHeaderNavigation: FC<Props> = memo(function DropdownHeaderNavigation(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.header} ${props.classes?.header || ''}`}>
        <div className={`${classes.container} ${props.classes?.container || ''}`}>
          <_NavMenuButton />
        </div>
      </div>
    </div>
  );
});
