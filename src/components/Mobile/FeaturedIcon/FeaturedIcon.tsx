import { FC, memo } from 'react';

import classes from './FeaturedIcon.module.css';
import { MailIcon } from './MailIcon';

interface Props {
  className?: string;
  classes?: {
    mail?: string;
  };
}
export const FeaturedIcon: FC<Props> = memo(function FeaturedIcon(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MailIcon className={`${classes.mail} ${props.classes?.mail || ''}`} />
    </div>
  );
});
