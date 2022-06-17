import { FC, memo } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { FictionalCompanyLogo } from '../FictionalCompanyLogo/FictionalCompanyLogo';
import classes from './QuoteSection.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    content?: string;
    quoteAndAttribution?: string;
    quote?: string;
    avatarAndText?: string;
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const QuoteSection: FC<Props> = memo(function QuoteSection(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.content} ${props.classes?.content || ''}`}>
          <div className={`${classes.quoteAndAttribution} ${props.classes?.quoteAndAttribution || ''}`}>
            <FictionalCompanyLogo />
            <div className={`${classes.quote} ${props.classes?.quote || ''}`}>
              We&#39;ll no doubt be working with Untitled on future projects. Finding the right agency to work with is a
              daunting task, but we absolutely found the right team and haven’t looked back.
            </div>
            <div className={`${classes.avatarAndText} ${props.classes?.avatarAndText || ''}`}>
              <Avatar />
              <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
                <div className={`${classes.text} ${props.classes?.text || ''}`}>Candice Wu</div>
                <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
                  Product Manager, Sisyphus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
