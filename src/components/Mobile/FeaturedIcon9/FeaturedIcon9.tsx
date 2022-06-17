import { FC, memo } from 'react';

import classes from './FeaturedIcon9.module.css';
import { MapPinIcon } from './MapPinIcon';

interface Props {
  className?: string;
  classes?: {
    mapPin?: string;
  };
}
export const FeaturedIcon9: FC<Props> = memo(function FeaturedIcon9(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <MapPinIcon className={`${classes.mapPin} ${props.classes?.mapPin || ''}`} />
    </div>
  );
});
