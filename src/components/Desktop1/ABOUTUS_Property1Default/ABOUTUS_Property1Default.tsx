import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ABOUTUS_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    aBOUTUS?: ReactNode;
  };
}
/* @figmaId 24:52 */
export const ABOUTUS_Property1Default: FC<Props> = memo(function ABOUTUS_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.aBOUTUS != null ? props.text?.aBOUTUS : <div className={classes.aBOUTUS}>ABOUT US</div>}
    </div>
  );
});
