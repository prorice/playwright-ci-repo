import { RadioProps } from '@mui/material/Radio';
import { RadioLabelPlacementType } from './radio-props.enum';

export interface IRadioLabel extends RadioProps {
  value?: string;
  label: string | React.ReactNode;
  labelPlacement?: RadioLabelPlacementType;
}

export interface IRadioGroupProps extends RadioProps {
  title?: string;
  defaultValue?: string;
  groupName?: string;
  radioValues: IRadioLabel[];
  row?: boolean;
}
