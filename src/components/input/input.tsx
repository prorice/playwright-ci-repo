import React from 'react';
import { TextField as MuiInput } from '@mui/material';
import { InputProps } from './types/input-props.interface';

export function Input(props: InputProps) {
  return <MuiInput {...props} />;
}
