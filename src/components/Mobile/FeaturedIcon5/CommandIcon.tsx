import { memo, SVGProps } from 'react';

const CommandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5 2.5A2.5 2.5 0 0 0 13 5v10a2.5 2.5 0 1 0 2.5-2.5h-10A2.5 2.5 0 1 0 8 15V5a2.5 2.5 0 1 0-2.5 2.5h10a2.5 2.5 0 0 0 0-5Z'
      stroke='#7F56D9'
      strokeWidth={1.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CommandIcon);
export { Memo as CommandIcon };
