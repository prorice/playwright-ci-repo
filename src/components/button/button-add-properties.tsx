import React from 'react';
import { Button } from './button';
import { IconAddCircle } from '../icon';

import { ButtonVariant } from './types/button-props.enum';
import { IButtonAddPropertiesProps } from './types/button-props.interface';

export function ButtonAddProperties(props: IButtonAddPropertiesProps) {
  const { addText, ...other } = props;
  const endIcon = <IconAddCircle />;
  const text = addText ? `${addText} 추가` : '추가';

  return (
    <Button variant={ButtonVariant.contained} endIcon={endIcon} {...other}>
      {text}
    </Button>
  );
}
