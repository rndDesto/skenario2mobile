import { memo, SVGProps } from 'react';

const MessageCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 9.583a6.983 6.983 0 0 1-.75 3.167 7.084 7.084 0 0 1-6.333 3.917 6.983 6.983 0 0 1-3.167-.75L3 17.5l1.583-4.75a6.983 6.983 0 0 1-.75-3.167A7.083 7.083 0 0 1 7.75 3.25a6.983 6.983 0 0 1 3.167-.75h.416A7.066 7.066 0 0 1 18 9.167v.416Z'
      stroke='#7F56D9'
      strokeWidth={1.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MessageCircleIcon);
export { Memo as MessageCircleIcon };
