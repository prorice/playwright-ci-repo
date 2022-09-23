import React from 'react';
import { FormControlLabel } from '@mui/material';
import { Radio } from './radio';

import { IRadioLabel } from './types/radio-props.interface';

export function RadioLabel(props: IRadioLabel) {
  const { value, label, labelPlacement, ...other } = props;
  const controlRadio = <Radio {...other} />;

  return (
    <FormControlLabel
      value={value}
      label={label}
      labelPlacement={labelPlacement}
      control={controlRadio}
    />
  );
}
