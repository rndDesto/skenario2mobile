import { FC, memo } from 'react';

import { ContainerIcon } from './ContainerIcon';
import classes from './Divider2.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
  };
}
export const Divider2: FC<Props> = memo(function Divider2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <ContainerIcon className={`${classes.container} ${props.classes?.container || ''}`} />
    </div>
  );
});
