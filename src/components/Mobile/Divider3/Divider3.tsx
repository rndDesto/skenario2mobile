import { FC, memo } from 'react';

import { ContainerIcon } from './ContainerIcon';
import classes from './Divider3.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
  };
}
export const Divider3: FC<Props> = memo(function Divider3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <ContainerIcon className={`${classes.container} ${props.classes?.container || ''}`} />
    </div>
  );
});
