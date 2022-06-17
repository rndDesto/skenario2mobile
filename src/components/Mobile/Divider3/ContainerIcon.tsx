import { memo, SVGProps } from 'react';

const ContainerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 375 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M359 1H16V0h343v1Z' fill='#EAECF0' />
  </svg>
);

const Memo = memo(ContainerIcon);
export { Memo as ContainerIcon };
