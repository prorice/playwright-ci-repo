import React from 'react';
import { Button } from './button';

import { ButtonVariant } from './types/button-props.enum';
import { IButtonSaveProps } from './types/button-props.interface';

export function ButtonSave(props: IButtonSaveProps) {
  const text = '저장';

  return (
    <Button variant={ButtonVariant.contained} {...props}>
      {text}
    </Button>
  );
}
