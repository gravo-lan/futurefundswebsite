import { memo } from 'react';
import type { FC } from 'react';
import { Linking, Pressable } from 'react-native';

import resets from '../_resets.module.css';
import { ABOUTUS_Property1Default } from './ABOUTUS_Property1Default/ABOUTUS_Property1Default';
import { Button_VariantPrimaryStateDefa } from './Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa';
import { CONTACT_Property1Default } from './CONTACT_Property1Default/CONTACT_Property1Default';
import classes from './Desktop1.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon2Icon } from './Polygon2Icon';
import { Polygon3Icon } from './Polygon3Icon';

interface Props {
  className?: string;
}
/* @figmaId 2:5 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle5}></div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.polygon3}>
        <Polygon3Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.gROW_UP_BUSINESS_LOGORemovebgP}></div>
      <Button_VariantPrimaryStateDefa
        className={classes.button2}
        text={{
          button: <div className={classes.button}>LEARN MORE</div>,
        }}
      />
      <Button_VariantPrimaryStateDefa
        className={classes.button4}
        text={{
          button: <div className={classes.button3}>CONTACT US</div>,
        }}
      />
      <div className={classes.empoweringYoungMindsInFinance}>
        <div className={classes.textBlock}>Empowering</div>
        <div className={classes.textBlock2}>Young Minds in Finance</div>
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.gROW_UP_BUSINESS_LOGORemovebgP2}></div>
      <Pressable onPress = {() => Linking.openURL("https://www.linkedin.com/company/future-funds-initiative/")}>
        <Button_VariantPrimaryStateDefa
          className={classes.button6}
          text={{
            button: <div className={classes.button5}>VOLUNTEER</div>,
          }}
        />
      </Pressable>
      <ABOUTUS_Property1Default
        className={classes.aBOUTUS2}
        text={{
          aBOUTUS: <div className={classes.aBOUTUS}>ABOUT US</div>,
        }}
      />
      <Pressable onPress = {() => Linking.openURL("mailto:gehl01@sevenoaksschool.org")}>
        <CONTACT_Property1Default
          className={classes.cONTACT2}
          text={{
            cONTACT: <div className={classes.cONTACT}>CONTACT</div>,
          }}
        />
      <div className={classes.hOME}>HOME</div>
      </Pressable>
    </div>
  );
});
