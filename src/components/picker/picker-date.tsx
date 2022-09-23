import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { PickerProps } from './types/picker-props.interface';
import { Input } from '../input';
import { InputProps } from '../input/types/input-props.interface';
import { DateFormat } from './types/picker-date.enum';

export const renderInput = (params: InputProps) => (
  <Input {...params} fullWidth />
);

export function PickerDate(props: PickerProps) {
  const { inputFormat } = props;

  return (
    <DesktopDatePicker
      {...props}
      renderInput={renderInput}
      inputFormat={inputFormat ?? DateFormat.YYMMDD}
    />
  );
}
