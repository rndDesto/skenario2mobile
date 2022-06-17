import { FC, memo } from 'react';

import { Button2 } from '../Button2/Button2';
import { Button } from '../Button/Button';
import { DropdownHeaderNavigation } from '../DropdownHeaderNavigation/DropdownHeaderNavigation';
import { ContentIcon } from './ContentIcon';
import classes from './HeroHeaderSection.module.css';

interface Props {
  className?: string;
  classes?: {
    section?: string;
    container?: string;
    content?: string;
    headingAndSupportingText?: string;
    textWrap?: string;
    heading?: string;
    supportingText?: string;
    actions?: string;
    container2?: string;
    content2?: string;
  };
}
export const HeroHeaderSection: FC<Props> = memo(function HeroHeaderSection(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <DropdownHeaderNavigation />
      <div className={`${classes.section} ${props.classes?.section || ''}`}>
        <div className={`${classes.container} ${props.classes?.container || ''}`}>
          <div className={`${classes.content} ${props.classes?.content || ''}`}>
            <div className={`${classes.headingAndSupportingText} ${props.classes?.headingAndSupportingText || ''}`}>
              <div className={`${classes.textWrap} ${props.classes?.textWrap || ''}`}>
                <div className={`${classes.heading} ${props.classes?.heading || ''}`}>
                  We design digital experiences that create more happy in the world
                </div>
              </div>
              <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
                — We’re a full-service design and development agency who specialise in simple, useful and beautiful
                solutions.
              </div>
            </div>
            <div className={`${classes.actions} ${props.classes?.actions || ''}`}>
              <Button />
              <Button2 />
            </div>
          </div>
        </div>
        <div className={`${classes.container2} ${props.classes?.container2 || ''}`}>
          <ContentIcon className={`${classes.content2} ${props.classes?.content2 || ''}`} />
        </div>
      </div>
    </div>
  );
});
