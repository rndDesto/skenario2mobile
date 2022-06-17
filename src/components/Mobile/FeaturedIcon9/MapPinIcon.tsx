import { memo, SVGProps } from 'react';

const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MapPinIcon);
export { Memo as MapPinIcon };
