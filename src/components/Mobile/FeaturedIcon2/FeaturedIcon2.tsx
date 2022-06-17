import { FC, memo } from 'react';

import { BarChart2Icon } from './BarChart2Icon';
import classes from './FeaturedIcon2.module.css';

interface Props {
  className?: string;
  classes?: {
    barChart2?: string;
  };
}
export const FeaturedIcon2: FC<Props> = memo(function FeaturedIcon2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <BarChart2Icon className={`${classes.barChart2} ${props.classes?.barChart2 || ''}`} />
    </div>
  );
});
