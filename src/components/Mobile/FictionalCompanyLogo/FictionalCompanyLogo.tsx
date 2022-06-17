import { FC, memo } from 'react';

import classes from './FictionalCompanyLogo.module.css';
import { LogomarkIcon } from './LogomarkIcon';
import { LogotypeIcon } from './LogotypeIcon';

interface Props {
  className?: string;
  classes?: {
    logomark?: string;
    logotype?: string;
  };
}
export const FictionalCompanyLogo: FC<Props> = memo(function FictionalCompanyLogo(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <LogomarkIcon className={`${classes.logomark} ${props.classes?.logomark || ''}`} />
      <LogotypeIcon className={`${classes.logotype} ${props.classes?.logotype || ''}`} />
    </div>
  );
});
