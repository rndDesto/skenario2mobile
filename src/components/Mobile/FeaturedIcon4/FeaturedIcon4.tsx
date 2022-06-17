import { FC, memo } from 'react';

import classes from './FeaturedIcon4.module.css';
import { SmileIcon } from './SmileIcon';

interface Props {
  className?: string;
  classes?: {
    smile?: string;
  };
}
export const FeaturedIcon4: FC<Props> = memo(function FeaturedIcon4(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <SmileIcon className={`${classes.smile} ${props.classes?.smile || ''}`} />
    </div>
  );
});
