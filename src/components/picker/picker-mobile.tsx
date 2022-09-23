import React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { PickerProps } from './types/picker-props.interface';
import { renderInput } from './picker-date';
import { DateFormat } from './types/picker-date.enum';

export function PickerMobile(props: PickerProps) {
  const { inputFormat } = props;

  return (
    <MobileDatePicker
      {...props}
      renderInput={renderInput}
      inputFormat={inputFormat ?? DateFormat.YYMMDD}
    />
  );
}
