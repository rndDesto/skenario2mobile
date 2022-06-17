import { FC, memo } from 'react';

import { FeaturedIcon2 } from '../FeaturedIcon2/FeaturedIcon2';
import classes from './_FeatureText2.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText2: FC<Props> = memo(function _FeatureText2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon2 />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Deliver instant answers</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          An all-in-one customer service platform that helps you balance everything your customers need to be happy.
        </div>
      </div>
    </div>
  );
});
