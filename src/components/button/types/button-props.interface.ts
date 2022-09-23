import { ButtonProps, ButtonGroupProps } from '@mui/material';

// 디자인 및 기획에 따라 type 추가, 삭제 하며 관리 될 예정
export interface IButtonSearchProps extends ButtonProps {
  isIcon?: boolean;
  addText?: string;
}

export interface IButtonAddPropertiesProps extends ButtonProps {
  addText?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonSendProps extends ButtonProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonSaveProps extends ButtonProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonCsvDownloadProps extends ButtonProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonShowPropertiesProps extends ButtonProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonGroupDateFilterProps extends ButtonGroupProps {}
