import { FC, memo } from 'react';

import { Button7 } from '../Button7/Button7';
import { InputField } from '../InputField/InputField';
import classes from './NewsletterCTASection.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    content?: string;
    headingAndSupportingText?: string;
    heading?: string;
    supportingText?: string;
    emailCapture?: string;
  };
}
export const NewsletterCTASection: FC<Props> = memo(function NewsletterCTASection(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.content} ${props.classes?.content || ''}`}>
          <div className={`${classes.headingAndSupportingText} ${props.classes?.headingAndSupportingText || ''}`}>
            <div className={`${classes.heading} ${props.classes?.heading || ''}`}>
              We’ll send you a nice letter once per week
            </div>
            <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
              No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great
              people.
            </div>
          </div>
          <div className={`${classes.emailCapture} ${props.classes?.emailCapture || ''}`}>
            <InputField />
            <Button7 />
          </div>
        </div>
      </div>
    </div>
  );
});
