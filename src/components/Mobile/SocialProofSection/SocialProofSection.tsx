import { FC, memo } from 'react';

import { CompanyLogoIcon } from './CompanyLogoIcon';
import { CompanyLogoIcon2 } from './CompanyLogoIcon2';
import { CompanyLogoIcon3 } from './CompanyLogoIcon3';
import { CompanyLogoIcon4 } from './CompanyLogoIcon4';
import { CompanyLogoIcon5 } from './CompanyLogoIcon5';
import { CompanyLogoIcon6 } from './CompanyLogoIcon6';
import classes from './SocialProofSection.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    text?: string;
    logosWrap?: string;
    logos?: string;
    companyLogo?: string;
    companyLogo2?: string;
    logos2?: string;
    companyLogo3?: string;
    companyLogo4?: string;
    logos3?: string;
    companyLogo5?: string;
    companyLogo6?: string;
  };
}
export const SocialProofSection: FC<Props> = memo(function SocialProofSection(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>We’ve worked with some great startups</div>
        <div className={`${classes.logosWrap} ${props.classes?.logosWrap || ''}`}>
          <div className={`${classes.logos} ${props.classes?.logos || ''}`}>
            <CompanyLogoIcon className={`${classes.companyLogo} ${props.classes?.companyLogo || ''}`} />
            <CompanyLogoIcon2 className={`${classes.companyLogo2} ${props.classes?.companyLogo2 || ''}`} />
          </div>
          <div className={`${classes.logos2} ${props.classes?.logos2 || ''}`}>
            <CompanyLogoIcon3 className={`${classes.companyLogo3} ${props.classes?.companyLogo3 || ''}`} />
            <CompanyLogoIcon4 className={`${classes.companyLogo4} ${props.classes?.companyLogo4 || ''}`} />
          </div>
          <div className={`${classes.logos3} ${props.classes?.logos3 || ''}`}>
            <CompanyLogoIcon5 className={`${classes.companyLogo5} ${props.classes?.companyLogo5 || ''}`} />
            <CompanyLogoIcon6 className={`${classes.companyLogo6} ${props.classes?.companyLogo6 || ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
});
