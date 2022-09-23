import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { Radio } from './radio';

import { IRadioGroupProps, IRadioLabel } from './types/radio-props.interface';

export function RadioGroup(props: IRadioGroupProps) {
  const { title, defaultValue, groupName, radioValues, row, ...others } = props;

  const group = radioValues.map((rv: IRadioLabel) => {
    return (
      <FormControlLabel
        key={rv.value}
        value={rv.value}
        control={<Radio {...others} />}
        label={rv.label}
        labelPlacement={rv.labelPlacement}
      />
    );
  });

  return (
    <FormControl>
      <FormLabel id="radio-buttons-group-label">{title}</FormLabel>
      <MuiRadioGroup
        row={row}
        aria-labelledby="radio-buttons-group-label"
        defaultValue={defaultValue}
        name={groupName}
      >
        {group}
      </MuiRadioGroup>
    </FormControl>
  );
}
