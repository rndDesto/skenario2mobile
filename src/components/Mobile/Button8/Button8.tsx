import { FC, memo } from 'react';

import classes from './Button8.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button8: FC<Props> = memo(function Button8(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>Get started</div>
    </button>
  );
});
