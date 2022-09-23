import React from 'react';
import { InputAdornment } from '@mui/material';
import { Input } from './input';
import { IconHome } from '../icon';

import { InputIconPosition, InputVariant } from './types/input-props.enum';
import { IInputPropertyProps } from './types/input-props.interface';

export function InputProperty(props: IInputPropertyProps) {
  const { iconPosition, ...other } = props;
  const icon = <IconHome />;
  const adornment =
    iconPosition === InputIconPosition.start
      ? {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }
      : {
          endAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        };

  return (
    <Input InputProps={adornment} variant={InputVariant.standard} {...other} />
  );
} // To be: 아이콘 관련된 컴포넌트가 추가되거나 변동된다면 하나로 통일해 props으로 아이콘 형식 지정하도록 수정 예정
