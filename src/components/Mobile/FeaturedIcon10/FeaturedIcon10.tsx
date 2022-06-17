import { FC, memo } from 'react';

import classes from './FeaturedIcon10.module.css';
import { PhoneIcon } from './PhoneIcon';

interface Props {
  className?: string;
  classes?: {
    phone?: string;
  };
}
export const FeaturedIcon10: FC<Props> = memo(function FeaturedIcon10(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <PhoneIcon className={`${classes.phone} ${props.classes?.phone || ''}`} />
    </div>
  );
});
