import {
  MenuItemProps as MuiMenuItemProps,
  SelectProps as MuiSelectProps,
  NativeSelectProps as MuiNativeSelectProps,
  FormControlProps as MuiFormControlProps,
  InputLabelProps as MuiInputLabelProps,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material';
import { Attributes, LiHTMLAttributes } from 'react';

export interface InputLabelProps extends MuiInputLabelProps {
  text: string;
}

export interface FormHelperTextProps extends MuiFormHelperTextProps {
  text: string;
}

// Baic Select
export interface MenuItemProps extends MuiMenuItemProps {
  text: string;
  subheader?: string;
}

export interface SelectProps extends MuiSelectProps {
  menuItems?: MenuItemProps[];
  formControlProps?: MuiFormControlProps;
  inputLabelProps?: InputLabelProps;
  formHelperTextProps?: FormHelperTextProps;
  placeholder?: string;
  checkbox?: true;
}

// Native Select OptionHTMLAttributes
export interface OptionProps extends Attributes, LiHTMLAttributes<unknown> {
  text: string;
  subheader?: string;
}

export interface SelectNativeProps extends MuiNativeSelectProps {
  options?: OptionProps[];
  formControlProps?: MuiFormControlProps;
  inputLabelProps?: InputLabelProps;
  formHelperTextProps?: FormHelperTextProps;
}
