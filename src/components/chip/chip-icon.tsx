import React from 'react';
import { Chip } from './chip';
import { IChipIconProps } from './types/chip-props.interface';

export function ChipIcon(props: IChipIconProps) {
  return <Chip {...props} />;
}
