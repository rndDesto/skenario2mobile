import { FC, memo } from 'react';

import classes from './Button4.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button4: FC<Props> = memo(function Button4(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>support@untitledui.com</div>
    </div>
  );
});
