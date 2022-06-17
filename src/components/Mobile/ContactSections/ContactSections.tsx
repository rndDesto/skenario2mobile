import { FC, memo } from 'react';

import { _ContactText2 } from '../_ContactText2/_ContactText2';
import { _ContactText3 } from '../_ContactText3/_ContactText3';
import { _ContactText4 } from '../_ContactText4/_ContactText4';
import { _ContactText } from '../_ContactText/_ContactText';
import classes from './ContactSections.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    content?: string;
    headingAndSupportingText?: string;
    headingAndSubheading?: string;
    subheading?: string;
    heading?: string;
    supportingText?: string;
    container2?: string;
    content2?: string;
  };
}
export const ContactSections: FC<Props> = memo(function ContactSections(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.content} ${props.classes?.content || ''}`}>
          <div className={`${classes.headingAndSupportingText} ${props.classes?.headingAndSupportingText || ''}`}>
            <div className={`${classes.headingAndSubheading} ${props.classes?.headingAndSubheading || ''}`}>
              <div className={`${classes.subheading} ${props.classes?.subheading || ''}`}>Contact us</div>
              <div className={`${classes.heading} ${props.classes?.heading || ''}`}>We’d love to hear from you</div>
            </div>
            <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
              Our friendly team is always here to chat.
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.container2} ${props.classes?.container2 || ''}`}>
        <div className={`${classes.content2} ${props.classes?.content2 || ''}`}>
          <_ContactText />
          <_ContactText2 />
          <_ContactText3 />
          <_ContactText4 />
        </div>
      </div>
    </div>
  );
});
