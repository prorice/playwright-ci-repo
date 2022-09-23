import React from 'react';
import { TimePicker } from '@mui/x-date-pickers';
import { PickerProps } from './types/picker-props.interface';
import { renderInput } from './picker-date';

export function PickerTime(props: PickerProps) {
  return <TimePicker {...props} renderInput={renderInput} />;
}
