import React from 'react';
import { Box, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';

import {
  Input,
  InputProperty,
  InputSearch,
  InputSelected,
  InputMultiline,
} from '@/components/input';

import { TabPanel } from '../sample-page-tab-panel';

function SampleInput() {
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
          <Tab label="기본 Input" />
          <Tab label="기본 prop 활용 Input" />
          <Tab label="Multiline Input" />
          <Tab label="Search Input" />
          <Tab label="숙소(Home) Input" />
          <Tab label="Selected Input" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <h3>variant</h3>
              <Stack spacing={2} direction="row">
                <Input variant="filled" placeholder="placeholder" />
                <Input variant="outlined" placeholder="placeholder" />
                <Input variant="standard" placeholder="placeholder" />
              </Stack>
              <h3>Size</h3>
              <Stack spacing={2} direction="row">
                <Input size="small" placeholder="placeholder" />
                <Input size="medium" placeholder="placeholder" />
              </Stack>
              <h3>Color: 색깔을 확인하려면 click</h3>
              <Stack spacing={2} direction="row">
                <Input color="primary" placeholder="placeholder" />
                <Input color="secondary" placeholder="placeholder" />
                <Input color="error" placeholder="placeholder" />
                <Input color="info" placeholder="placeholder" />
                <Input color="success" placeholder="placeholder" />
                <Input color="warning" placeholder="placeholder" />
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <h3>
                HelperText: helperText prop을 활용해 hint 텍스트를 넣어줄 수
                있다.
              </h3>
              <Input placeholder="placeholder" helperText="helperText" />
              <h3>
                Label Input: label prop을 이용해 input 라벨을 넣어줄 수 있다.
              </h3>
              <Input placeholder="placeholder" label="label" />
              <h3>Require 필수 표기</h3>
              <h3>
                : required props를 사용하며, label props와 함께 사용되어야 함
              </h3>
              <Input placeholder="placeholder" label="label" required />
              <h3>
                Error Input: input validate 작업을 위해 error prop을 활용해서
                적용시켜줄 수 있다.
              </h3>
              <Input error placeholder="placeholder" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <h3>
                여러줄을 작성하기 좋은 Input: rows prop을 이용해서 몇줄 크기로
                사용할 것인지 지정할 수 있음. ex) rows={4}
              </h3>
              <h3>rows 숫자를 넘어가면 스크롤이 생김.</h3>
              <InputMultiline rows={4} placeholder="placeholder" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card>
            <CardContent>
              <h3>
                검색 icon의 위치를 iconPosition prop을 이용해서 지정해줄 수
                있음.(기본 위치는 end)
              </h3>
              <InputSearch />
              <h3>iconPosition: start</h3>
              <InputSearch iconPosition="start" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Card>
            <CardContent>
              <h3>iconPosition: end(default)</h3>
              <InputProperty />
              <h3>iconPosition: start</h3>
              <InputProperty iconPosition="start" />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Card>
            <CardContent>
              <h3>
                menuItems prop을 활용해 선택할 데이터를 넘겨주어 사용할 수 있음.
                mui select 컴포넌트와 비슷함
              </h3>
              <h3>menuItems: {`['input1', 'input2', 'input3', 'input4']`}</h3>
              <InputSelected
                menuItems={['input1', 'input2', 'input3', 'input4']}
                helperText="Please select your item"
              />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleInput;
