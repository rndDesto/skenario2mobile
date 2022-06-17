import { FC, memo } from 'react';

import { FeaturedIcon3 } from '../FeaturedIcon3/FeaturedIcon3';
import classes from './_FeatureText3.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText3: FC<Props> = memo(function _FeatureText3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon3 />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Manage your team with reports</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in
          a couple clicks.
        </div>
      </div>
    </div>
  );
});
