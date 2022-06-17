import { FC, memo } from 'react';

import classes from './Button7.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button7: FC<Props> = memo(function Button7(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>Subscribe</div>
    </button>
  );
});
