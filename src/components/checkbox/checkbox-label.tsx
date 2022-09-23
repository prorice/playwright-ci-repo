import React from 'react';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from './checkbox';

import { ICheckboxLabelProps } from './types/checkbox-props.interface';

export function CheckboxLabel(props: ICheckboxLabelProps) {
  const { label, labelPlacement, ...other } = props;
  const controlCheckbox = <Checkbox {...other} />;

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={controlCheckbox}
    />
  );
}
