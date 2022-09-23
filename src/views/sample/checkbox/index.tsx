import React from 'react';
import {
  Favorite,
  FavoriteBorder,
  HomeOutlined,
  Home,
} from '@mui/icons-material';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';

import { Checkbox, CheckboxIcon, CheckboxLabel } from '@/components/checkbox';

import { TabPanel } from '../sample-page-tab-panel';

function SampleCheckbox() {
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
          <Tab label="기본 체크박스" />
          <Tab label="라벨 체크박스" />
          <Tab label="아이콘 체크박스" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <h3>Color</h3>
              <Checkbox defaultChecked color="primary" />
              <Checkbox defaultChecked color="secondary" />
              <Checkbox defaultChecked color="error" />
              <Checkbox defaultChecked color="info" />
              <Checkbox defaultChecked color="success" />
              <Checkbox defaultChecked color="warning" />
              <div>
                <h3>Size</h3>
                <Checkbox defaultChecked size="small" />
                <Checkbox defaultChecked size="medium" />
              </div>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <CheckboxLabel label="label" />
              <h3>
                labelPlacement prop을 이용해서 label 위치를 설정할 수 있다.
              </h3>
              <CheckboxLabel label="end" labelPlacement="end" />
              <CheckboxLabel label="start" labelPlacement="start" />
              <CheckboxLabel label="top" labelPlacement="top" />
              <CheckboxLabel label="bottom" labelPlacement="bottom" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <h3>
                클릭 전 아이콘과 클릭 후 아이콘을 icon, checkedIcon prop을
                이용해 넘겨주어 사용할 수 있다.
              </h3>
              <CheckboxIcon
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              <CheckboxIcon icon={<HomeOutlined />} checkedIcon={<Home />} />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleCheckbox;
