import React from 'react';
import { Button } from './button';
import { IconSend } from '../icon';

import { ButtonVariant } from './types/button-props.enum';
import { IButtonSendProps } from './types/button-props.interface';

export function ButtonSend(props: IButtonSendProps) {
  const startIcon = <IconSend />;
  const text = 'SEND';

  return (
    <Button variant={ButtonVariant.contained} startIcon={startIcon} {...props}>
      {text}
    </Button>
  );
}
