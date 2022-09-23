import React from 'react';
import { MenuItem } from '@mui/material';
import { Input } from './input';

import { InputVariant } from './types/input-props.enum';
import { IInputSelectedProps } from './types/input-props.interface';

// select 컴포넌트와 사용성이 비슷함 같음.
export function InputSelected(props: IInputSelectedProps) {
  const { menuItems, ...other } = props;
  const items = menuItems.map((item: string) => {
    return <MenuItem key={item}>{item}</MenuItem>;
  });
  return (
    <Input select variant={InputVariant.standard} {...other}>
      {items}
    </Input>
  );
}
