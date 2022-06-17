import { memo, SVGProps } from 'react';

const LogomarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fill='#039855' d='M.083 16h8v8h-8z' />
    <path fill='#027A48' d='M24.084 24h-8v-8h8z' />
    <path d='m8.084 16 8-8v8l-8 8v-8Z' fill='#A6F4C5' />
    <path d='m16.083 24-8 8v-8l8-8v8Z' fill='#6CE9A6' />
    <path d='m.083 16 16-16v8l-8 8h-8Z' fill='#32D583' />
    <path d='m24.083 24-16 16v-8l8-8h8Z' fill='#12B76A' />
  </svg>
);

const Memo = memo(LogomarkIcon);
export { Memo as LogomarkIcon };
