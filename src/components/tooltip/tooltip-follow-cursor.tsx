import React from 'react';
import { Tooltip } from './tooltip';

import { ITooltipFollowCursor } from './types/tooltip-props.interface';

export function TooltipFollowCursor(props: ITooltipFollowCursor) {
  return <Tooltip followCursor {...props} />;
}
