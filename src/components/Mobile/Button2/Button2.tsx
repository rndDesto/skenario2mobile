import { FC, memo } from 'react';

import classes from './Button2.module.css';
import { PlayCircleIcon } from './PlayCircleIcon';

interface Props {
  className?: string;
  classes?: {
    playCircle?: string;
    text?: string;
  };
}
export const Button2: FC<Props> = memo(function Button2(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <PlayCircleIcon className={`${classes.playCircle} ${props.classes?.playCircle || ''}`} />
      <div className={`${classes.text} ${props.classes?.text || ''}`}>Showreel</div>
    </button>
  );
});
