import { FC, memo } from 'react';

import classes from './Avatar.module.css';

interface Props {
  className?: string;
}
export const Avatar: FC<Props> = memo(function Avatar(props = {}) {
  return <div className={`${classes.root} ${props.className || ''}`}></div>;
});
