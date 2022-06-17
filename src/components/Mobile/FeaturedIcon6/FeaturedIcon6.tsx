import { FC, memo } from 'react';

import classes from './FeaturedIcon6.module.css';
import { MessageCircleIcon } from './MessageCircleIcon';

interface Props {
  className?: string;
  classes?: {
    messageCircle?: string;
  };
}
export const FeaturedIcon6: FC<Props> = memo(function FeaturedIcon6(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MessageCircleIcon className={`${classes.messageCircle} ${props.classes?.messageCircle || ''}`} />
    </div>
  );
});
