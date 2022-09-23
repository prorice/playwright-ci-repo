import { Dayjs } from 'dayjs';

export interface PickerProps {
  label?: string;
  value: Dayjs | null;
  inputFormat?: string;
  onChange(value: unknown, keyboardInputValue?: string): void;
}
