import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1915 1915' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1915 957.5L478.75 1786.72L478.75 128.281L1915 957.5Z' fill='#F5F5F5' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
