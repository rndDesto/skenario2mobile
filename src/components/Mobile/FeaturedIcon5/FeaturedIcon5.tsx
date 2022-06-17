import { FC, memo } from 'react';

import { CommandIcon } from './CommandIcon';
import classes from './FeaturedIcon5.module.css';

interface Props {
  className?: string;
  classes?: {
    command?: string;
  };
}
export const FeaturedIcon5: FC<Props> = memo(function FeaturedIcon5(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <CommandIcon className={`${classes.command} ${props.classes?.command || ''}`} />
    </div>
  );
});
