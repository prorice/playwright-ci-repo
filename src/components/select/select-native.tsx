import React from 'react';
import {
  NativeSelect as MuiNativeSelect,
  FormControl as MuiFormControl,
} from '@mui/material';
import { OptionProps, SelectNativeProps } from './types/select-props.interface';
import { FormHelperText, InputLabel } from './select';

export function SelectNative(props: SelectNativeProps) {
  const {
    children,
    options,
    formControlProps,
    inputLabelProps,
    formHelperTextProps,
    ...rest
  } = props;

  const basicSelect = options ? (
    <MuiNativeSelect {...rest}>
      {options.map((item: OptionProps) => (
        <option key={item.value as React.Key} value={item.value}>
          {item.text}
        </option>
      ))}
    </MuiNativeSelect>
  ) : (
    <MuiNativeSelect {...rest}> {children} </MuiNativeSelect>
  );

  const label = inputLabelProps ? <InputLabel {...inputLabelProps} /> : null;

  const helperText = formHelperTextProps ? (
    <FormHelperText {...formHelperTextProps} />
  ) : null;
  return (
    <MuiFormControl {...formControlProps}>
      {label}
      {basicSelect}
      {helperText}
    </MuiFormControl>
  );
}
