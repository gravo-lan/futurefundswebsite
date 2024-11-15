import { memo, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1919 1915' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1919 957.5L479.75 1786.72L479.75 128.281L1919 957.5Z' fill='#E6E6E6' />
  </svg>
);

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
