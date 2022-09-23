import React from 'react';
import { LinearProgress, LinearProgressProps } from '@mui/material';

// 추후 value prop관련한 컴포넌트 wrapping 필요시 추가 작업될 예정.
export function ProgressLinear(props: LinearProgressProps) {
  return <LinearProgress {...props} />;
}
