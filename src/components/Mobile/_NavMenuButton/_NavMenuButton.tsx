import { FC, memo } from 'react';

import classes from './_NavMenuButton.module.css';
import { MenuIcon } from './MenuIcon';

interface Props {
  className?: string;
  classes?: {
    menu?: string;
  };
}
export const _NavMenuButton: FC<Props> = memo(function _NavMenuButton(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MenuIcon className={`${classes.menu} ${props.classes?.menu || ''}`} />
    </div>
  );
});
