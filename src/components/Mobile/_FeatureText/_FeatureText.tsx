import { FC, memo } from 'react';

import { FeaturedIcon } from '../FeaturedIcon/FeaturedIcon';
import classes from './_FeatureText.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText: FC<Props> = memo(function _FeatureText(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Share team inboxes</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
        </div>
      </div>
    </div>
  );
});
