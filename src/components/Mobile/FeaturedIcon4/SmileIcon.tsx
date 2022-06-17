import { memo, SVGProps } from 'react';

const SmileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.167 11.667s1.25 1.666 3.333 1.666 3.333-1.666 3.333-1.666M8 7.5h.008M13 7.5h.008m5.825 2.5a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z'
      stroke='#7F56D9'
      strokeWidth={1.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SmileIcon);
export { Memo as SmileIcon };
