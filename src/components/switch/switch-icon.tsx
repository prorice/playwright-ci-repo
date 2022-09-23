import React from 'react';
import { Switch } from './switch';

import { ISwitchIconProps } from './types/switch-props.interface';

// 공통으로 사용하고 있는 아이콘 스위치 버튼이 없어서 아이콘을 따로 지정해두지 않았음.
// 사용될 수도 있을 것 같아 제작. 필요 없을시 삭제 예정.
export function SwitchIcon(props: ISwitchIconProps) {
  return <Switch {...props} />;
}
