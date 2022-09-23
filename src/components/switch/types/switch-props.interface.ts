import { SwitchProps } from '@mui/material/Switch';
import { SwitchLabelPlacementType } from './switch-props.enum';

export interface ISwitchLabelProps extends SwitchProps {
  label: string | React.ReactNode;
  labelPlacement?: SwitchLabelPlacementType;
}

export interface ISwitchIconProps extends SwitchProps {
  icon: React.ReactNode; // 클릭하기전 아이콘 ex) icon={<FavoriteBorder />}
  checkedIcon: React.ReactNode; // 클릭후 아이콘 ex) checkedIcon={<Favorite />}
}
