import { FC, memo } from 'react';

import { Button8 } from '../Button8/Button8';
import { Button9 } from '../Button9/Button9';
import classes from './Footer.module.css';
import { LinkLogosOnlyIcon } from './LinkLogosOnlyIcon';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    content?: string;
    linkLogosOnly?: string;
    headingAndSupportingText?: string;
    heading?: string;
    supportingText?: string;
    actions?: string;
    container2?: string;
    content2?: string;
    footerLinks?: string;
    footerLink?: string;
    footerLink2?: string;
    footerLink3?: string;
    footerText?: string;
  };
}
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.content} ${props.classes?.content || ''}`}>
          <LinkLogosOnlyIcon className={`${classes.linkLogosOnly} ${props.classes?.linkLogosOnly || ''}`} />
          <div className={`${classes.headingAndSupportingText} ${props.classes?.headingAndSupportingText || ''}`}>
            <div className={`${classes.heading} ${props.classes?.heading || ''}`}>
              Let’s get started on something great
            </div>
            <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
              Join over 4,000+ startups already growing with Untitled.
            </div>
          </div>
          <div className={`${classes.actions} ${props.classes?.actions || ''}`}>
            <Button8 />
            <Button9 />
          </div>
        </div>
      </div>
      <div className={`${classes.container2} ${props.classes?.container2 || ''}`}>
        <div className={`${classes.content2} ${props.classes?.content2 || ''}`}>
          <div className={`${classes.footerLinks} ${props.classes?.footerLinks || ''}`}>
            <div className={`${classes.footerLink} ${props.classes?.footerLink || ''}`}>Terms</div>
            <div className={`${classes.footerLink2} ${props.classes?.footerLink2 || ''}`}>Privacy</div>
            <div className={`${classes.footerLink3} ${props.classes?.footerLink3 || ''}`}>Cookies</div>
          </div>
          <div className={`${classes.footerText} ${props.classes?.footerText || ''}`}>
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
});
