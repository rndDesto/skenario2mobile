import { memo, SVGProps } from 'react';

const BarChart2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5 16.667V8.333m-5 8.334V3.333m-5 13.334v-5'
      stroke='#7F56D9'
      strokeWidth={1.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(BarChart2Icon);
export { Memo as BarChart2Icon };
