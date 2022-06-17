import { FC, memo } from 'react';

import classes from './Button9.module.css';
import { PlayCircleIcon } from './PlayCircleIcon';

interface Props {
  className?: string;
  classes?: {
    playCircle?: string;
    text?: string;
  };
}
export const Button9: FC<Props> = memo(function Button9(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <PlayCircleIcon className={`${classes.playCircle} ${props.classes?.playCircle || ''}`} />
      <div className={`${classes.text} ${props.classes?.text || ''}`}>View demo</div>
    </button>
  );
});
