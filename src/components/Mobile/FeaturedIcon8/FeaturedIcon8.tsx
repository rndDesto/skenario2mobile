import { FC, memo } from 'react';

import classes from './FeaturedIcon8.module.css';
import { MessageCircleIcon } from './MessageCircleIcon';

interface Props {
  className?: string;
  classes?: {
    messageCircle?: string;
  };
}
export const FeaturedIcon8: FC<Props> = memo(function FeaturedIcon8(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MessageCircleIcon className={`${classes.messageCircle} ${props.classes?.messageCircle || ''}`} />
    </div>
  );
});
