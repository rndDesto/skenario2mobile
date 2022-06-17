import { FC, memo } from 'react';

import { FeaturedIcon5 } from '../FeaturedIcon5/FeaturedIcon5';
import classes from './_FeatureText5.module.css';

interface Props {
  className?: string;
  classes?: {
    textAndSupportingText?: string;
    text?: string;
    supportingText?: string;
  };
}
export const _FeatureText5: FC<Props> = memo(function _FeatureText5(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <FeaturedIcon5 />
      <div className={`${classes.textAndSupportingText} ${props.classes?.textAndSupportingText || ''}`}>
        <div className={`${classes.text} ${props.classes?.text || ''}`}>Connect the tools you already use</div>
        <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
          Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive
          developer tools.
        </div>
      </div>
    </div>
  );
});
