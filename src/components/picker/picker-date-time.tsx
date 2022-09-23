import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import { PickerProps } from './types/picker-props.interface';
import { renderInput } from './picker-date';
import { DateFormat } from './types/picker-date.enum';

export function PickerDateTime(props: PickerProps) {
  const { inputFormat } = props;

  return (
    <DateTimePicker
      {...props}
      renderInput={renderInput}
      inputFormat={inputFormat ?? DateFormat.YYMMDDHHMMSSA}
    />
  );
}
