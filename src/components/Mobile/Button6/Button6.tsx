import { FC, memo } from 'react';

import classes from './Button6.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button6: FC<Props> = memo(function Button6(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>+1 (555) 000-0000</div>
    </div>
  );
});
