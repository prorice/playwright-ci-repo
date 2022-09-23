import React from 'react';
import { FormControlLabel } from '@mui/material';
import { Switch } from './switch';

import { ISwitchLabelProps } from './types/switch-props.interface';

export function SwitchLabel(props: ISwitchLabelProps) {
  const { label, labelPlacement, ...other } = props;
  const controlSwitch = <Switch {...other} />;

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={controlSwitch}
    />
  );
}
