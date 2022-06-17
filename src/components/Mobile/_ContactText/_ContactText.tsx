import { FC, memo } from 'react';

import { Button3 } from '../Button3/Button3';
import { FeaturedIcon7 } from '../FeaturedIcon7/FeaturedIcon7';
import classes from './_ContactText.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _ContactText: FC<Props> = memo(function _ContactText(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon7 />
      <div className={`${classes.content} ${props.classes?.content || ''}`}>
        <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
          <div className={`${classes.text} ${props.classes?.text || ''}`}>Chat to sales</div>
          <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
            Speak to our friendly team.
          </div>
        </div>
        <Button3 />
      </div>
    </div>
  );
});
