import React from 'react';
import {
  MenuItem as MuiMenuItem,
  Select as MUiSelect,
  InputLabel as MuiInputLabel,
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
  ListSubheader as MuiListSubheader,
  ListItemText as MuiListItemText,
} from '@mui/material';
import {
  SelectProps,
  MenuItemProps,
  InputLabelProps,
  FormHelperTextProps,
} from './types/select-props.interface';
import { Checkbox } from '../checkbox';

export function InputLabel(props: InputLabelProps) {
  const { text, ...rest } = props;
  return <MuiInputLabel {...rest}>{text}</MuiInputLabel>;
}

export function FormHelperText(props: FormHelperTextProps) {
  const { text, ...rest } = props;
  return <MuiFormHelperText {...rest}>{text}</MuiFormHelperText>;
}

export function createListSubheader(
  menuItems: MenuItemProps[],
  item: MenuItemProps,
  i: number,
) {
  return menuItems[i]?.subheader &&
    (menuItems[i]?.subheader !== menuItems[i - 1]?.subheader ||
      (menuItems[i]?.subheader && i === 0)) ? (
    <MuiListSubheader>{item.subheader}</MuiListSubheader>
  ) : null;
}

function createCheckBoxMenuItem(item: MenuItemProps, value: unknown) {
  return (
    <MuiMenuItem key={item.value as React.Key} value={item.value}>
      {Array.isArray(value) ? (
        <Checkbox checked={value.includes(item.value)} />
      ) : (
        <Checkbox checked={value === item.value} />
      )}
      <MuiListItemText primary={item.text} />
    </MuiMenuItem>
  );
}

function createMenuItem(item: MenuItemProps) {
  return (
    <MuiMenuItem key={item.value as React.Key} value={item.value}>
      {item.text}
    </MuiMenuItem>
  );
}

export function Select(props: SelectProps) {
  const {
    children,
    menuItems,
    formControlProps,
    inputLabelProps,
    formHelperTextProps,
    placeholder,
    checkbox,
    ...rest
  } = props;

  const { value } = props;

  const customRenderValue =
    (selectProps: SelectProps) => (selected: unknown) => {
      const isArray = Array.isArray(selected);
      const select = isArray ? (selected as string[]) : (selected as string);

      if (select.length === 0) {
        return placeholder;
      }

      if (rest.renderValue) {
        return rest.renderValue(selected);
      }

      if (isArray) {
        return selectProps?.menuItems
          ?.filter((item: MenuItemProps) => {
            return (selected as string[]).find(
              (selectItem: string) => selectItem === item.value,
            );
          })
          .map((selectItem: MenuItemProps) => selectItem.text)
          .join(', ');
      }

      return selectProps?.menuItems?.find(
        (item: MenuItemProps) => item.value === selected,
      )?.text;
    };

  const basicSelect = menuItems ? (
    <MUiSelect displayEmpty {...rest} renderValue={customRenderValue(props)}>
      {menuItems.map((item: MenuItemProps, i: number) => [
        createListSubheader(menuItems, item, i),
        checkbox ? createCheckBoxMenuItem(item, value) : createMenuItem(item),
      ])}
    </MUiSelect>
  ) : (
    <MUiSelect displayEmpty {...rest}>
      {children}
    </MUiSelect>
  );

  const label = inputLabelProps ? <InputLabel {...inputLabelProps} /> : null;

  const helperText = formHelperTextProps ? (
    <FormHelperText {...formHelperTextProps} />
  ) : null;

  return (
    <MuiFormControl {...formControlProps}>
      {label}
      {basicSelect}
      {helperText}
    </MuiFormControl>
  );
}
