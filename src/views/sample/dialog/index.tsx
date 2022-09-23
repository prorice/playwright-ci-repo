import React, { useState, SyntheticEvent, Fragment } from 'react';
import { Box, Card, CardContent, Stack, Tab, Tabs } from '@mui/material';
import { Dialog } from '@/container/dialog';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { TabPanel } from '../sample-page-tab-panel';

function SampleDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dialogOpen = () => {
    setOpen(true);
  };
  const dialogClose = () => {
    setOpen(false);
  };

  const dialogContentText = `
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
      faucibus dolor auctor.`;

  const dialogContent = (
    <Fragment>
      {dialogContentText}
      <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
        <Input placeholder="first Name" label="first name" />
        <Input placeholder="Name" label="name" />
      </Stack>
    </Fragment>
  );

  const dialogDescription = `dialog 컨테이너 예시로 사용한 prop들 뿐만 아니라 다양한 속성을 설정해 활용할 수 있다.

- 필수 prop인 open과 onClose prop을 이용해 open/close, backdrop click을 핸들링할 수 있다.

- fullWidth, maxWidth prop을 활용해서 dialog의 width 크기를 지정할 수 있다.

- dialogContent와 dialogContentText prop을 활용해 내용을 자유롭게 표기할 수 있다.

- dialogAction을 따로 설정해주지 않으면 confirm, cancel 버튼 두개가 뜨게 되며 각 버튼에 text도 지정해 줄 수 있고,
  각 버튼에 confirmButtonAction, cancelButtonAction으로 event를 넣어줄 수 있다. 

- scroll prop도 활용할 수 있는데,
  값이 paper 이면 내용을 스크롤 할 수 있고, body면 dialog 전체를 스크롤 할 수 있다. 
  
- fullScreen props를 이용해서 전체 화면으로 띄울 수 있다.
  `;
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
          <Tab label="기본 dialog" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Button variant="contained" onClick={dialogOpen} sx={{ mb: 2 }}>
                Dialog Open
              </Button>
              <Dialog
                open={open}
                onClose={dialogClose}
                dialogTitle="Modal title"
                dialogContent={dialogContent}
                confirmButtonText="OK"
                confirmButtonAction={dialogClose}
              />
              <pre>{dialogDescription}</pre>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </div>
  );
}

export default SampleDialog;
