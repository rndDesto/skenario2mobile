import { FC, memo } from 'react';

import { Button4 } from '../Button4/Button4';
import { FeaturedIcon8 } from '../FeaturedIcon8/FeaturedIcon8';
import classes from './_ContactText2.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _ContactText2: FC<Props> = memo(function _ContactText2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon8 />
      <div className={`${classes.content} ${props.classes?.content || ''}`}>
        <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
          <div className={`${classes.text} ${props.classes?.text || ''}`}>Chat to support</div>
          <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>We’re here to help.</div>
        </div>
        <Button4 />
      </div>
    </div>
  );
});
