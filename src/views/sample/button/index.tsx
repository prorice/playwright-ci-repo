import React from 'react';
import { Box, Grid, Stack, Tabs, Tab, CardContent, Card } from '@mui/material';

import {
  Button,
  ButtonSearch,
  ButtonCsvDownload,
  ButtonAddProperties,
  ButtonShowProperties,
  ButtonSave,
  ButtonSend,
  ButtonGroupDateFilter,
} from '@/components/button';

import { TabPanel } from '../sample-page-tab-panel';

// 추후 각 버튼 설명 tooltip 컴포넌트 wrapping작업이 되면 tooltip 넣을 예정
function SampleButton() {
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
          <Tab label="기본 버튼" />
          <Tab label="검색 버튼" />
          <Tab label="추가 버튼" />
          <Tab label="보내기 버튼" />
          <Tab label="저장 버튼" />
          <Tab label="CSV 다운로드 버튼" />
          <Tab label="보기 버튼" />
          <Tab label="날짜 필터 버튼 그룹" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <h5>Size</h5>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="medium">
                  Medium
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
              </Stack>
              <h5>Variant</h5>
              <Stack spacing={2} direction="row">
                <Button variant="contained">버튼</Button>
                <Button variant="outlined">버튼</Button>
                <Button variant="text">버튼</Button>
              </Stack>
              <h5>Color</h5>
              <Stack spacing={2} direction="row">
                <Button color="inherit">버튼</Button>
                <Button color="primary">버튼</Button>
                <Button color="secondary">버튼</Button>
                <Button color="success">버튼</Button>
                <Button color="error">버튼</Button>
                <Button color="info">버튼</Button>
                <Button color="warning">버튼</Button>
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={5}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <div>
                    <h3>일반 검색 텍스트가 있는 기본 검색 버튼</h3>
                    <ButtonSearch />
                  </div>
                  <div>
                    <h3>
                      addText prop을 이용해 검색 텍스트 앞에 텍스트를 추가할 수
                      있음
                    </h3>
                    <ButtonSearch addText="숙소" />
                  </div>
                  <div>
                    <h3>
                      isIcon prop을 이용해 검색 아이콘을 버튼에 추가할 수 있음
                    </h3>
                    <ButtonSearch isIcon />
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <div>
                  <h3>기본 추가 버튼</h3>
                  <ButtonAddProperties />
                </div>
                <div>
                  <h3>
                    addText prop을 이용해 추가 텍스트 앞에 텍스트를 추가할 수
                    있음
                  </h3>
                  <ButtonAddProperties addText="숙소" />
                </div>
              </Stack>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card>
            <CardContent>
              <ButtonSend />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Card>
            <CardContent>
              <ButtonSave />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Card>
            <CardContent>
              <ButtonCsvDownload />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Card>
            <CardContent>
              <ButtonShowProperties />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Card>
            <CardContent>
              <ButtonGroupDateFilter />
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleButton;
