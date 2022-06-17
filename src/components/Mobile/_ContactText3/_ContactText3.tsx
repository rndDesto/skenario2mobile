import { FC, memo } from 'react';

import { Button5 } from '../Button5/Button5';
import { FeaturedIcon9 } from '../FeaturedIcon9/FeaturedIcon9';
import classes from './_ContactText3.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _ContactText3: FC<Props> = memo(function _ContactText3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon9 />
      <div className={`${classes.content} ${props.classes?.content || ''}`}>
        <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
          <div className={`${classes.text} ${props.classes?.text || ''}`}>Visit us</div>
          <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>Visit our office HQ.</div>
        </div>
        <Button5 />
      </div>
    </div>
  );
});
