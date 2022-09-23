import React from 'react';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';

import {
  Tooltip,
  TooltipFollowCursor,
  TooltipArrow,
} from '@/components/tooltip';

import { TabPanel } from '../sample-page-tab-panel';

function SampleTooltip() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          bgColor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderColor: 'divider' }}
        >
          <Tab label="기본 tooltip" />
          <Tab label="arrow tooltip" />
          <Tab label="follow cursor tooltip" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Tooltip title="tooltip">
                <Box
                  sx={{
                    backgroundColor: 'primary.dark',
                    color: 'background.paper',
                    p: 5,
                  }}
                >
                  Tooltip
                </Box>
              </Tooltip>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <TooltipArrow title="tooltip">
                <Box
                  sx={{
                    backgroundColor: 'primary.dark',
                    color: 'background.paper',
                    p: 5,
                  }}
                >
                  Tooltip Arrow
                </Box>
              </TooltipArrow>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <TooltipFollowCursor title="tooltip">
                <Box
                  sx={{
                    backgroundColor: 'primary.dark',
                    color: 'background.paper',
                    p: 5,
                  }}
                >
                  Tooltip Follow Cursor
                </Box>
              </TooltipFollowCursor>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleTooltip;
