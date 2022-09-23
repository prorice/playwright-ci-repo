import React from 'react';
import { ButtonGroup } from '@mui/material';
import { Button } from './button';

import { IButtonGroupDateFilterProps } from './types/button-props.interface';
import { ButtonVariant } from './types/button-props.enum';

export function ButtonGroupDateFilter(props: IButtonGroupDateFilterProps) {
  const buttonText = ['어제', '오늘', '최근한주', '최근한달'];

  return (
    <ButtonGroup variant={ButtonVariant.outlined} {...props}>
      {buttonText.map((text: string) => (
        <Button key={text}>{text}</Button>
      ))}
    </ButtonGroup>
  );
}
