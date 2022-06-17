import { memo, SVGProps } from 'react';

const ZapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.333 1.667 3 11.667h7.5l-.833 6.666 8.333-10h-7.5l.833-6.666Z'
      stroke='#7F56D9'
      strokeWidth={1.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ZapIcon);
export { Memo as ZapIcon };
