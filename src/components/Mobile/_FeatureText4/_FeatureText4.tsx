import { FC, memo } from 'react';

import { FeaturedIcon4 } from '../FeaturedIcon4/FeaturedIcon4';
import classes from './_FeatureText4.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText4: FC<Props> = memo(function _FeatureText4(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon4 />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Connect with customers</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly
          routed to email without confusion.
        </div>
      </div>
    </div>
  );
});
