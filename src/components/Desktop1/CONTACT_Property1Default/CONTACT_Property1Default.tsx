import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CONTACT_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    cONTACT?: ReactNode;
  };
}
/* @figmaId 24:62 */
export const CONTACT_Property1Default: FC<Props> = memo(function CONTACT_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.cONTACT != null ? props.text?.cONTACT : <div className={classes.cONTACT}>CONTACT</div>}
    </div>
  );
});
