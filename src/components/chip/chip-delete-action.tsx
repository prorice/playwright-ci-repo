import React from 'react';
import { Chip } from './chip';
import { IChipDeleteActionProps } from './types/chip-props.interface';

export function ChipDeleteAction(props: IChipDeleteActionProps) {
  return <Chip {...props} />;
}
