import { FC, memo } from 'react';

import { Button6 } from '../Button6/Button6';
import { FeaturedIcon10 } from '../FeaturedIcon10/FeaturedIcon10';
import classes from './_ContactText4.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _ContactText4: FC<Props> = memo(function _ContactText4(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon10 />
      <div className={`${classes.content} ${props.classes?.content || ''}`}>
        <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
          <div className={`${classes.text} ${props.classes?.text || ''}`}>Call us</div>
          <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
            Mon-Fri from 8am to 5pm.
          </div>
        </div>
        <Button6 />
      </div>
    </div>
  );
});
