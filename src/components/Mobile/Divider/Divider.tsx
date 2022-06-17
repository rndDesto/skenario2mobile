import { FC, memo } from 'react';

import { ContainerIcon } from './ContainerIcon';
import classes from './Divider.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
  };
}
export const Divider: FC<Props> = memo(function Divider(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <ContainerIcon className={`${classes.container} ${props.classes?.container || ''}`} />
    </div>
  );
});
