import { BaseTextFieldProps } from '@mui/material';
import { InputIconPositionType } from './input-props.enum';

// To be: 디자인 및 기획에 따라 type 추가, 삭제 하며 관리 될 예정
export interface InputProps extends BaseTextFieldProps {
  // 확장되지 않는 library interface가 있어 해당 인터페이스 내 prop만 임의로 추가해줌
  InputProps?: object;
}
export interface IInputSearchProps extends InputProps {
  iconPosition?: InputIconPositionType;
}

export interface IInputSelectedProps extends InputProps {
  menuItems: string[]; // To be: 추후 들어갈 데이터에 따라 타입 바뀔 수 있음
}

export interface IInputPropertyProps extends InputProps {
  iconPosition?: InputIconPositionType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInputMultilineProps extends InputProps {}
