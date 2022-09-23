import React from 'react';
import { Button } from './button';
import { IconDownload } from '../icon';

import { ButtonVariant } from './types/button-props.enum';
import { IButtonCsvDownloadProps } from './types/button-props.interface';

export function ButtonCsvDownload(props: IButtonCsvDownloadProps) {
  const startIcon = <IconDownload />;
  const text = 'CSV DOWNLOAD';

  return (
    <Button variant={ButtonVariant.contained} startIcon={startIcon} {...props}>
      {text}
    </Button>
  );
}
