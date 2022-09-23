import React from 'react';
import { Box } from '@mui/material';

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function Tab(props: TabPanelProps) {
  const { children, ...other } = props;
  return (
    <div role="tabpanel" style={{ width: '100%' }} {...other}>
      <Box sx={{ m: 2, height: 800 }}>{children}</Box>
    </div>
  );
}

export function TabPanel(props: TabPanelProps) {
  const { value, index } = props;

  return value === index ? <Tab {...props} /> : null;
}
