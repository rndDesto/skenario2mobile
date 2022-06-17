import { FC, memo } from 'react';

import classes from './FeaturedIcon7.module.css';
import { MailIcon } from './MailIcon';

interface Props {
  className?: string;
  classes?: {
    mail?: string;
  };
}
export const FeaturedIcon7: FC<Props> = memo(function FeaturedIcon7(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MailIcon className={`${classes.mail} ${props.classes?.mail || ''}`} />
    </div>
  );
});
