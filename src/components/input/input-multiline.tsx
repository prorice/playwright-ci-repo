import React from 'react';
import { Input } from './input';

import { IInputMultilineProps } from './types/input-props.interface';

export function InputMultiline(props: IInputMultilineProps) {
  return <Input multiline {...props} />;
}
