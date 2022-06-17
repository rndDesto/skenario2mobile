import { FC, memo } from 'react';

import classes from './Button3.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button3: FC<Props> = memo(function Button3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>sales@untitledui.com</div>
    </div>
  );
});
