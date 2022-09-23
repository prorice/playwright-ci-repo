import React from 'react';
import { Box, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  Chip,
  ChipClickAction,
  ChipDeleteAction,
  ChipIcon,
} from '@/components/chip';

import { TabPanel } from '../sample-page-tab-panel';

function SampleChip() {
  const [value, setValue] = React.useState(0);

  const [showing, setShowing] = React.useState(false);
  const chipClickAction = () => setShowing(!showing);

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
          <Tab label="기본 chip" />
          <Tab label="클릭 액션 chip" />
          <Tab label="삭제 액션 chip" />
          <Tab label="아이콘 chip" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <h3>Variant</h3>
              <Stack direction="row" spacing={2}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Outlined" variant="outlined" />
              </Stack>
              <h3>Size</h3>
              <Stack direction="row" spacing={2}>
                <Chip label="small" size="small" />
                <Chip label="medium" size="medium" />
              </Stack>
              <h3>Color</h3>
              <Stack direction="row" spacing={2}>
                <Chip label="primary" color="primary" />
                <Chip label="secondary" color="secondary" />
                <Chip label="error" color="error" />
                <Chip label="info" color="info" />
                <Chip label="success" color="success" />
                <Chip label="warning" color="warning" />
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <h3>onClick prop을 이용하여 클릭 이벤트를 구성할 수 있다.</h3>
              <Stack direction="row" spacing={2}>
                <ChipClickAction
                  label="Chip Click Action"
                  onClick={chipClickAction}
                />
                {showing && <Chip label="Show ACTION!" color="info" />}
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <h3>onDelete prop을 활용하여 삭제 이벤트를 구성할 수 있다.</h3>
              <Stack direction="row" spacing={2}>
                {!showing && (
                  <ChipDeleteAction
                    label="Chip Delete Action"
                    onDelete={chipClickAction}
                  />
                )}
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card>
            <CardContent>
              <ChipIcon icon={<AccountCircleIcon />} label="chip icon" />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleChip;
