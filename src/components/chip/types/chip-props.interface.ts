import { ChipProps } from '@mui/material/Chip';

export interface IChipDeleteActionProps extends ChipProps {
  deleteIcon?: React.ReactElement; // Delete icon을 바꾸고 싶을때 사용.

  // delete 버튼 클릭 이벤트
  onDelete(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface IChipIconProps extends ChipProps {
  icon: React.ReactElement;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IChipClickActionProps extends ChipProps {}
