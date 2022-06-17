import { FC, memo } from 'react';

import classes from './Button5.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button5: FC<Props> = memo(function Button5(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>
        100 Smith Street
        <br />
        Collingwood VIC 3066 AU
      </div>
    </div>
  );
});
