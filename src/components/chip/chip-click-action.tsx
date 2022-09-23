import React from 'react';
import { Chip } from './chip';
import { IChipClickActionProps } from './types/chip-props.interface';

export function ChipClickAction(props: IChipClickActionProps) {
  return <Chip clickable {...props} />;
}
