import { FC, memo } from 'react';

import { FeaturedIcon6 } from '../FeaturedIcon6/FeaturedIcon6';
import classes from './_FeatureText6.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText6: FC<Props> = memo(function _FeatureText6(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon6 />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Our people make the difference</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team
          24/7 when you need help.
        </div>
      </div>
    </div>
  );
});
