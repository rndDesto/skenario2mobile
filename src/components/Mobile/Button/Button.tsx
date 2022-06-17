import { FC, memo } from 'react';

import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
  };
}
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.text} ${props.classes?.text || ''}`}>Get in touch</div>
    </button>
  );
});
