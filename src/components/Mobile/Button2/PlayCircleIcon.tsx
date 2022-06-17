import { memo, SVGProps } from 'react';

const PlayCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.5 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z'
      stroke='#344054'
      strokeWidth={1.67}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m8.833 6.667 5 3.333-5 3.333V6.667Z'
      stroke='#344054'
      strokeWidth={1.67}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlayCircleIcon);
export { Memo as PlayCircleIcon };
