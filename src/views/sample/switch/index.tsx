import React from 'react';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import { Switch, SwitchLabel, SwitchIcon } from '@/components/switch';

import { TabPanel } from '../sample-page-tab-panel';

function SampleSwitch() {
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
          <Tab label="기본 switch" />
          <Tab label="label switch" />
          <Tab label="icon switch" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Switch defaultChecked />
              <Switch />
              <Switch disabled defaultChecked />
              <Switch disabled />
              <h3>Size</h3>
              <Switch size="small" defaultChecked />
              <Switch size="medium" defaultChecked />
              <h3>Color</h3>
              <Switch color="primary" defaultChecked />
              <Switch color="secondary" defaultChecked />
              <Switch color="error" defaultChecked />
              <Switch color="info" defaultChecked />
              <Switch color="success" defaultChecked />
              <Switch color="warning" defaultChecked />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <SwitchLabel label="label" />
              <h3>Label Placement</h3>
              <SwitchLabel label="end" labelPlacement="end" />
              <SwitchLabel label="start" labelPlacement="start" />
              <SwitchLabel label="top" labelPlacement="top" />
              <SwitchLabel label="bottom" labelPlacement="bottom" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <h3>
                활용 종류에 따라 체크 전 아이콘, 체크 후 아이콘을 따로 지정하여
                사용할 수 있음
              </h3>
              <SwitchIcon
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleSwitch;
