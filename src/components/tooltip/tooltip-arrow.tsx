import React from 'react';
import { Tooltip } from './tooltip';

import { ITooltipArrow } from './types/tooltip-props.interface';

export function TooltipArrow(props: ITooltipArrow) {
  return <Tooltip arrow {...props} />;
}
