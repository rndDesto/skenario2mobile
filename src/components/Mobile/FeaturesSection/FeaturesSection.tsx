import { FC, memo } from 'react';

import { _FeatureText2 } from '../_FeatureText2/_FeatureText2';
import { _FeatureText3 } from '../_FeatureText3/_FeatureText3';
import { _FeatureText4 } from '../_FeatureText4/_FeatureText4';
import { _FeatureText5 } from '../_FeatureText5/_FeatureText5';
import { _FeatureText6 } from '../_FeatureText6/_FeatureText6';
import { _FeatureText } from '../_FeatureText/_FeatureText';
import classes from './FeaturesSection.module.css';

interface Props {
  className?: string;
  classes?: {
    container?: string;
    content?: string;
    headingAndSupportingText?: string;
    headingAndSubheading?: string;
    subheading?: string;
    heading?: string;
    supportingText?: string;
    container2?: string;
    content2?: string;
  };
}
export const FeaturesSection: FC<Props> = memo(function FeaturesSection(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.container} ${props.classes?.container || ''}`}>
        <div className={`${classes.content} ${props.classes?.content || ''}`}>
          <div className={`${classes.headingAndSupportingText} ${props.classes?.headingAndSupportingText || ''}`}>
            <div className={`${classes.headingAndSubheading} ${props.classes?.headingAndSubheading || ''}`}>
              <div className={`${classes.subheading} ${props.classes?.subheading || ''}`}>Our capabilities</div>
              <div className={`${classes.heading} ${props.classes?.heading || ''}`}>
                We’re here every step of the way
              </div>
            </div>
            <div className={`${classes.supportingText} ${props.classes?.supportingText || ''}`}>
              We pride ourselves on our ability to challenge core assumptions, unpick legacy behaviors, streamline
              complex processes, and strike a balance between great design and functional development.
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.container2} ${props.classes?.container2 || ''}`}>
        <div className={`${classes.content2} ${props.classes?.content2 || ''}`}>
          <_FeatureText />
          <_FeatureText2 />
          <_FeatureText3 />
          <_FeatureText4 />
          <_FeatureText5 />
          <_FeatureText6 />
        </div>
      </div>
    </div>
  );
});
