import { CheckboxProps } from '@mui/material/Checkbox';
import { CheckboxLabelPlacementType } from './checkbox-props.enum';

export interface ICheckboxLabelProps extends CheckboxProps {
  label: string | React.ReactNode;
  labelPlacement?: CheckboxLabelPlacementType;
}

export interface ICheckboxIconProps extends CheckboxProps {
  icon: React.ReactNode; // 클릭하기전 아이콘 ex) icon={<FavoriteBorder />}
  checkedIcon: React.ReactNode; // 클릭후 아이콘 ex) checkedIcon={<Favorite />}
}
