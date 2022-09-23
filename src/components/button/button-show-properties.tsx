import React from 'react';
import { Button } from './button';

import { ButtonVariant } from './types/button-props.enum';
import { IButtonShowPropertiesProps } from './types/button-props.interface';

export function ButtonShowProperties(props: IButtonShowPropertiesProps) {
  const text = '보기';

  return (
    <Button variant={ButtonVariant.contained} {...props}>
      {text}
    </Button>
  );
}
