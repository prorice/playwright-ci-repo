import React from 'react';
import { Checkbox } from './checkbox';

import { ICheckboxIconProps } from './types/checkbox-props.interface';

// 공통으로 사용하고 있는 아이콘 체크 박스가 없어서 아이콘을 따로 지정해두지 않았음.
export function CheckboxIcon(props: ICheckboxIconProps) {
  return <Checkbox {...props} />;
}
