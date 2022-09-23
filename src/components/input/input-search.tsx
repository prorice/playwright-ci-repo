import React from 'react';
import { InputAdornment } from '@mui/material';
import { Input } from './input';
import { IconSearch } from '../icon';

import { InputIconPosition, InputVariant } from './types/input-props.enum';
import { IInputSearchProps } from './types/input-props.interface';

export function InputSearch(props: IInputSearchProps) {
  const { iconPosition, ...other } = props;
  const icon = <IconSearch />;
  const adornment =
    iconPosition === InputIconPosition.start
      ? {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }
      : {
          endAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        };

  return (
    <Input InputProps={adornment} variant={InputVariant.standard} {...other} />
  );
}
