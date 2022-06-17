import { FC, memo } from 'react';

import classes from './FeaturedIcon3.module.css';
import { ZapIcon } from './ZapIcon';

interface Props {
  className?: string;
  classes?: {
    zap?: string;
  };
}
export const FeaturedIcon3: FC<Props> = memo(function FeaturedIcon3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <ZapIcon className={`${classes.zap} ${props.classes?.zap || ''}`} />
    </div>
  );
});
