import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

// 추후 value prop관련한 컴포넌트 wrapping 필요시 추가 작업될 예정.
export function ProgressCircular(props: CircularProgressProps) {
  return <CircularProgress {...props} />;
}
