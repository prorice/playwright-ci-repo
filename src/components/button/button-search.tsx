import React from 'react';
import { Button } from './button';
import { IconSearch } from '../icon';

import { IButtonSearchProps } from './types/button-props.interface';
import { ButtonVariant } from './types/button-props.enum';

export function ButtonSearch(props: IButtonSearchProps) {
  const { isIcon, addText, ...other } = props;
  const startIcon = isIcon ? <IconSearch /> : '';
  const text = addText ? `${addText} 검색` : '검색';

  return (
    <Button variant={ButtonVariant.contained} startIcon={startIcon} {...other}>
      {text}
    </Button>
  );
}
